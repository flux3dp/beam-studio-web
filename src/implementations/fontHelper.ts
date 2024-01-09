import progressCaller from 'app/actions/progress-caller';
import getUtilWS from 'helpers/api/utils-ws';
import i18n from 'helpers/i18n';
import {
  FontDescriptor,
  FontDescriptorKeys,
  FontHelper,
  WebFont,
} from 'core-interfaces/IFont';

import fontNameMap from './fonts/fontNameMap';
import previewSrcMap from './fonts/fontPreviewSrc';
import googleFonts from './fonts/googleFonts';
import monotypeFonts from './fonts/monotypeFonts';
import webFonts from './fonts/webFonts';

let previewSourceMap = previewSrcMap;
let availableFonts: WebFont[] | null = null;

const getFonts = async () => {
  const activeLang = i18n.getActiveLang();
  const googleLangFonts = googleFonts.getAvailableFonts(activeLang);
  googleFonts.applyStyle(googleLangFonts);
  const webLangFonts = webFonts.getAvailableFonts(activeLang);
  webFonts.applyStyle(webLangFonts);
  const { monotypeLangFonts, monotypePreviewSrcMap } =
    await monotypeFonts.getAvailableFonts(activeLang);
  previewSourceMap = { ...previewSrcMap, ...monotypePreviewSrcMap };
  availableFonts = [...googleLangFonts, ...webLangFonts, ...monotypeLangFonts];
  return availableFonts;
};

const getAvailableFonts = async () => availableFonts || (await getFonts());

const findFont = async (
  fontDescriptor: FontDescriptor
): Promise<FontDescriptor> => {
  // eslint-disable-next-line no-param-reassign
  fontDescriptor.style = fontDescriptor.style || 'Regular';
  let match = await getAvailableFonts();
  let font = match[0];
  if (fontDescriptor.postscriptName) {
    match = match.filter(
      (f) => f.postscriptName === fontDescriptor.postscriptName
    );
    font = match[0] || font;
  }
  if (fontDescriptor.family) {
    match = match.filter((f) => f.family === fontDescriptor.family);
    font = match[0] || font;
  }
  if ('italic' in fontDescriptor && fontDescriptor.italic !== undefined) {
    match = match.filter((f) => f.italic === fontDescriptor.italic);
    font = match[0] || font;
  }
  if (fontDescriptor.style) {
    match = match.filter((f) => f.style === fontDescriptor.style);
  }
  font = match[0] || font;
  if (fontDescriptor.weight) {
    match = match.filter((f) => f.weight === fontDescriptor.weight);
    font = match[0] || font;
  }
  return font;
};

const findFonts = async (
  fontDescriptor: FontDescriptor
): Promise<FontDescriptor[]> => {
  const fonts = await getAvailableFonts();
  const matchFamily = fontDescriptor.family
    ? fonts.filter((font) => font.family === fontDescriptor.family)
    : fonts;
  const match = matchFamily.filter((font) => {
    const keys = Object.keys(fontDescriptor);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i] as FontDescriptorKeys;
      if (font[key] !== fontDescriptor[key]) {
        return false;
      }
    }
    return true;
  });
  return match;
};

const applyMonotypeStyle = monotypeFonts.applyStyle;

const fontDirectory = '/usr/share/fonts/truetype/beam-studio/';

export default {
  findFont,
  findFonts,
  getAvailableFonts,
  async substituteFont(postscriptName: string) {
    const font = (await getAvailableFonts()).filter(
      (f) => f.postscriptName === postscriptName
    );
    return font[0] as FontDescriptor;
  },
  getFontName(font: FontDescriptor): string {
    if (font.family && font.family in fontNameMap) {
      return fontNameMap[font.family] || font.family;
    }
    return font.family as string;
  },
  async getWebFontAndUpload(postscriptName: string) {
    const utilWS = getUtilWS();
    const font = (await getAvailableFonts()).find(
      (f) => f.postscriptName === postscriptName
    );
    const fileName = font?.fileName || `${postscriptName}.ttf`;
    const isMonotype = font && 'hasLoaded' in font;
    const fontPath = isMonotype
      ? `${fontDirectory}monotype/${fileName}`
      : `${fontDirectory}${fileName}`;
    const isExisting = await utilWS.checkExist(fontPath);
    if (!isExisting) {
      let isCanceled = false;
      let message = i18n.lang.beambox.right_panel.object_panel.actions_panel.fetching_web_font;
      await progressCaller.openSteppingProgress({
        id: 'fetch-web-font',
        message,
        onCancel: () => {
          isCanceled = true;
        },
      });
      const { protocol } = window.location;
      let url = `${protocol}//beam-studio-web.s3.ap-northeast-1.amazonaws.com/fonts/${fileName}`;
      // TODO: move to cloud service or delete monotype file
      if (isMonotype) {
        const monotypeUrl = await monotypeFonts.getUrlWithToken(postscriptName);
        if (monotypeUrl) url = monotypeUrl;
      }
      let resp = (await fetch(url, {
        mode: 'cors',
      })) as Response;
      const contentType = resp.headers.get('content-type') as string;
      if (contentType === 'application/json') {
        console.error(await resp.json());
        progressCaller.popById('fetch-web-font');
        return false;
      }
      const contentLength = resp.headers.get('content-length') as string;
      const total = parseInt(contentLength, 10);
      let loaded = 0;

      // getting progress of fetch
      resp = new Response(new ReadableStream({
        async start(controller) {
          const reader = resp.body?.getReader();
          if (!reader) {
            controller.close();
            return;
          }
          let done = false;
          while (!done) {
            // eslint-disable-next-line no-await-in-loop
            const result = await reader.read();
            done = result.done;
            if (done) break;
            const { value } = result;
            if (value) {
              loaded += value.byteLength;
              progressCaller.update('fetch-web-font', { percentage: (loaded / total) * 100 });
            }
            controller.enqueue(value);
          }
          controller.close();
        },
      }));
      if (resp.status !== 200) {
        progressCaller.popById('fetch-web-font');
        return false;
      }
      const blob = await resp.blob();
      if (isCanceled) {
        progressCaller.popById('fetch-web-font');
        return false;
      }
      message = i18n.lang.beambox.right_panel.object_panel.actions_panel.uploading_font_to_machine;
      progressCaller.update('fetch-web-font', { message, percentage: 0 });
      try {
        const res = await utilWS.uploadTo(blob, fontPath, (progress: number) => {
          progressCaller.update('fetch-web-font', { percentage: 100 * progress });
        });
        progressCaller.popById('fetch-web-font');
        if (!res || isCanceled) return false;
      } catch (e) {
        progressCaller.popById('fetch-web-font');
        return false;
      }
    }
    return true;
  },
  getWebFontPreviewUrl: (fontFamily: string) => (previewSourceMap[fontFamily] || null),
  applyMonotypeStyle,
} as FontHelper;
