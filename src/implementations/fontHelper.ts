import { FontDescriptor, FontDescriptorKeys, FontHelper } from 'core-interfaces/IFont';
import { sender } from 'implementations/communicator';

export const availableFonts = [
  {
    family: 'Arial',
    italic: false,
    monospace: false,
    postscriptName: 'ArialMT',
    style: 'Regular',
    weight: 400,
    width: 5,
    displayName: 'Arial',
  },
  {
    family: 'Arial',
    italic: false,
    monospace: false,
    postscriptName: 'Arial-BoldMT',
    style: 'Bold',
    weight: 700,
    width: 5,
  },
  {
    family: 'Arial',
    italic: true,
    monospace: false,
    postscriptName: 'Arial-BoldItalicMT',
    style: 'Bold Italic',
    weight: 700,
    width: 5,
  },
  {
    family: 'Arial',
    italic: true,
    monospace: false,
    postscriptName: 'Arial-ItalicMT',
    style: 'Italic',
    weight: 400,
    width: 5,
  },
  {
    family: 'Times',
    italic: false,
    monospace: false,
    postscriptName: 'Times-Roman',
    style: 'Regular',
    weight: 400,
    width: 5,
  },
  {
    family: 'Times',
    italic: false,
    monospace: false,
    postscriptName: 'Times-Bold',
    style: 'Bold',
    weight: 700,
    width: 5,
  },
  {
    family: 'Times',
    italic: true,
    monospace: false,
    postscriptName: 'Times-Italic',
    style: 'Italic',
    weight: 400,
    width: 5,
  },
  {
    family: 'Times',
    italic: true,
    monospace: false,
    postscriptName: 'Times-BoldItalic',
    style: 'Bold Italic',
    weight: 700,
    width: 5,
  },
];

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
  if (fontDescriptor.italic) {
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
    const matchedFonts = availableFonts.filter((f) => f.postscriptName === font.postscriptName);
    if (matchedFonts.length > 0) return matchedFonts[0].displayName;
    return font.family as string;
  },
} as FontHelper;
