import { FontDescriptor, FontDescriptorKeys, IFontScanner } from 'core-interfaces/IFont';
import { sender } from 'implementations/communicator';

export const availableFonts = [
  {
    family: 'Arial',
    italic: false,
    monospace: false,
    path: '',
    postscriptName: 'ArialMT',
    style: 'Regular',
    weight: 400,
    width: 5,
  }
];

const findFont = (fontDescriptor: FontDescriptor): FontDescriptor => {
  fontDescriptor.style = fontDescriptor.style || 'Regular';
  let match = availableFonts;
  let font = availableFonts[0];
  if ('postscriptName' in fontDescriptor) {
    match = match.filter((font) => font.postscriptName === fontDescriptor.postscriptName);
    font = match[0] || font;
  }
  if ('family' in fontDescriptor) {
    match = match.filter((font) => font.family === fontDescriptor.family);
    font = match[0] || font;
  }
  if ('italic' in fontDescriptor) {
    match = match.filter((font) => font.italic === fontDescriptor.italic);
    font = match[0] || font;
  }
  if ('style' in fontDescriptor)
    match = match.filter((font) => font.style === fontDescriptor.style);
  font = match[0] || font;
  if ('weight' in fontDescriptor) {
    match = match.filter((font) => font.weight === fontDescriptor.weight);
    font = match[0] || font;
  }
  return font;
};

const findFonts = (fontDescriptor: FontDescriptor): FontDescriptor[] => {
  const matchFamily = fontDescriptor.family
    ? availableFonts.filter(font => font.family === fontDescriptor.family)
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
  substituteFont(postscriptName: string, text: string) {
    return availableFonts[0] as FontDescriptor;
  },
} as IFontScanner;
