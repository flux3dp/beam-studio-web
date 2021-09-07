import progressCaller from 'app/actions/progress-caller';
import { FontDescriptor, FontDescriptorKeys, FontHelper } from 'core-interfaces/IFont';
import getUtilWS from 'helpers/api/utils-ws';
import i18n from 'helpers/i18n';
import { sender } from 'implementations/communicator';

import fontNameMap from './fonts/fontNameMap';
import previewSourceMap from './fonts/fontPreviewSrc';
import googleFonts from './fonts/googleFonts';
import webFonts from './fonts/webFonts';

const getFonts = () => {
  const activeLang = i18n.getActiveLang();
  const googleLangFonts = googleFonts.getAvailableFonts(activeLang);
  googleFonts.applyStyle(googleLangFonts);
  const webLangFonts = webFonts.getAvailableFonts(activeLang);
  webFonts.applyStyle(webLangFonts);
  return [
    ...googleLangFonts,
    ...webLangFonts,
  ];
};

export const availableFonts = getFonts();

const findFont = (fontDescriptor: FontDescriptor): FontDescriptor => {
  // eslint-disable-next-line no-param-reassign
  fontDescriptor.style = fontDescriptor.style || 'Regular';
  let match = availableFonts;
  let font = availableFonts[0];
  if (fontDescriptor.postscriptName) {
    match = match.filter((f) => f.postscriptName === fontDescriptor.postscriptName);
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

const findFonts = (fontDescriptor: FontDescriptor): FontDescriptor[] => {
  const matchFamily = fontDescriptor.family
    ? availableFonts.filter((font) => font.family === fontDescriptor.family)
    : availableFonts;
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

sender.on('GET_AVAILABLE_FONTS', (res) => {
  res.returnValue = availableFonts;
});

sender.on('FIND_FONT', (res, fontDescriptor: FontDescriptor) => {
  res.returnValue = findFont(fontDescriptor);
});

sender.on('FIND_FONTS', (res, fontDescriptor: FontDescriptor) => {
  res.returnValue = findFonts(fontDescriptor);
});

export default {
  findFont,
  findFonts,
  getAvailableFonts(): FontDescriptor[] {
    return availableFonts;
  },
  substituteFont(postscriptName: string) {
    const font = availableFonts.filter((f) => f.postscriptName === postscriptName);
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
    const font = availableFonts.find((f) => f.postscriptName === postscriptName);
    const fileName = font?.fileName || `${postscriptName}.ttf`;
    const isExisting = await utilWS.checkExist(`/usr/share/fonts/truetype/${fileName}`);
    if (!isExisting) {
      let isCanceled = false;
      await progressCaller.openSteppingProgress({
        id: 'fetch-web-font',
        message: 't取得線上字體中',
        onCancel: () => {
          isCanceled = true;
        },
      });
      const url = `https://beam-studio-web.s3.ap-northeast-1.amazonaws.com/fonts/${fileName}`;
      let resp = await fetch(url) as Response;
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
      progressCaller.update('fetch-web-font', { message: 't上傳字體到機器中', percentage: 0 });
      try {
        const res = await utilWS.uploadTo(blob, `/usr/share/fonts/truetype/${fileName}`, (progress: number) => {
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
} as FontHelper;
