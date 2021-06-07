import { FontDescriptor, IFontScanner } from 'core-interfaces/IFont';

export default {
  findFont(fontDescriptor: FontDescriptor): FontDescriptor {
    return {

    } as FontDescriptor;
  },
  findFonts(fontDescriptor: FontDescriptor): FontDescriptor[] {
    return [];
  },
  getAvailableFonts(): FontDescriptor[] {
    return [];
  },
  substituteFont(postscriptName: string, text: string) {
    return {

    } as FontDescriptor;
  },
} as IFontScanner;
