import { WebFont } from 'core-interfaces/IFont';

const fonts: WebFont[] = [
  {
    family: 'Passengers Script',
    italic: false,
    postscriptName: 'PassengersScript-Regular',
    style: 'Regular',
    weight: 400,
    fileName: 'PassengersScript.ttf',
    supportLangs: ['en', 'es', 'de'],
  },
  {
    family: '教育部標準楷書',
    italic: false,
    postscriptName: '教育部標準楷書',
    style: 'Regular',
    weight: 400,
    fileName: 'edukai-4.0.ttf',
    supportLangs: ['zh-tw'],
  },
];

const applyStyle = (fontsInUse: WebFont[]): void => {
  const style = document.createElement('style');
  let styleText = '';
  for (let i = 0; i < fontsInUse.length; i += 1) {
    const font = fontsInUse[i];
    styleText += `
    @font-face {
      font-family: '${font.family}';
      font-style: ${font.italic ? 'italic' : 'normal'};
      font-weight: ${font.weight};
      font-display: swap;
      src : url(https://beam-studio-web.s3.ap-northeast-1.amazonaws.com/fonts/${font.fileName});
    }`;
  }

  const head = document.querySelector('head');
  style.innerHTML = styleText;
  head?.appendChild(style);
};

const getAvailableFonts = (lang: string): WebFont[] => fonts.filter((font) => {
  if (!font.supportLangs) return true;
  return font.supportLangs.includes(lang);
});

export default {
  getAvailableFonts,
  applyStyle,
};
