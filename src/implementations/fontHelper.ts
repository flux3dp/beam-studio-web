import { FontDescriptor, FontDescriptorKeys, FontHelper } from 'core-interfaces/IFont';
import getUtilWS from 'helpers/api/utils-ws';
import i18n from 'helpers/i18n';
import { sender } from 'implementations/communicator';

import fontNameMap from './fonts/fontNameMap';
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
    const isExisting = await utilWS.checkExist(`/usr/share/fonts/beam-studio/${fileName}`);
    if (!isExisting) {
      const url = `https://beam-studio-web.s3.ap-northeast-1.amazonaws.com/fonts/${fileName}`;
      const resp = await fetch(url);
      if (resp.status !== 200) return false;
      const blob = await resp.blob();
      const res = await utilWS.uploadTo(blob, `/usr/share/fonts/beam-studio/${fileName}`);
      if (!res) return false;
    }
    return true;
  },
} as FontHelper;
