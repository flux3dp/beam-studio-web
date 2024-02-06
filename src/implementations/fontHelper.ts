// TODO: Move to core
// TODO: Add getWebFontAndUpload back
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
  getWebFontPreviewUrl: (fontFamily: string) => previewSourceMap[fontFamily] || null,
  applyMonotypeStyle,
  getMonotypeUrl: monotypeFonts.getUrlWithToken,
  getLocalFont: () => undefined,
} as FontHelper;
