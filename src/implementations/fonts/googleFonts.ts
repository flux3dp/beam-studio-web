import { WebFont } from 'core-interfaces/IFont';

const fonts: WebFont[] = [
  // Noto Sans
  {
    family: 'Noto Sans',
    italic: false,
    postscriptName: 'NotoSans-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700',
  },
  {
    family: 'Noto Sans',
    italic: true,
    postscriptName: 'NotoSans-Italic',
    style: 'Italic',
    weight: 400,
  },
  {
    family: 'Noto Sans',
    italic: false,
    postscriptName: 'NotoSans-Bold',
    style: 'Bold',
    weight: 700,
  },
  {
    family: 'Noto Sans',
    italic: true,
    postscriptName: 'NotoSans-BoldItalic',
    style: 'Bold Italic',
    weight: 700,
  },
  // Noto Sans TC
  // {
  //   family: 'Noto Sans TC',
  //   italic: false,
  //   postscriptName: 'NotoSansTC-Thin',
  //   style: 'Thin',
  //   weight: 100,
  //   queryString: 'family=Noto+Sans+TC:wght@100;300;400;500;700;900',
  //   fileName: 'NotoSansTC-Thin.otf',
  // },
  // {
  //   family: 'Noto Sans TC',
  //   italic: false,
  //   postscriptName: 'NotoSansTC-Light',
  //   style: 'Light',
  //   weight: 300,
  //   fileName: 'NotoSansTC-Light.otf',
  // },
  {
    family: 'Noto Sans TC',
    italic: false,
    postscriptName: 'NotoSansTC-Regular',
    style: 'Regular',
    weight: 400,
    fileName: 'NotoSansTC-Regular.otf',
  },
  // {
  //   family: 'Noto Sans TC',
  //   italic: false,
  //   postscriptName: 'NotoSansTC-Medium',
  //   style: 'Medium',
  //   weight: 500,
  //   fileName: 'NotoSansTC-Medium.otf',
  // },
  {
    family: 'Noto Sans TC',
    italic: false,
    postscriptName: 'NotoSansTC-Bold',
    style: 'Bold',
    weight: 700,
    fileName: 'NotoSansTC-Bold.otf',
  },
  // {
  //   family: 'Noto Sans TC',
  //   italic: false,
  //   postscriptName: 'NotoSansTC-Black',
  //   style: 'Black',
  //   weight: 900,
  //   fileName: 'NotoSansTC-Black.otf',
  // },
  // Yomogi
  {
    family: 'Yomogi',
    italic: false,
    postscriptName: 'Yomogi-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Yomogi',
    supportLangs: ['ja', 'zh-tw'],
  },
  // Dela Gothic One
  {
    family: 'Dela Gothic One',
    italic: false,
    postscriptName: 'DelaGothicOne-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Dela+Gothic+One',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'Potta One',
    italic: false,
    postscriptName: 'PottaOne-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Potta+One',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'Train One',
    italic: false,
    postscriptName: 'TrainOne-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Train+One',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'Stick',
    italic: false,
    postscriptName: 'Stick-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Stick',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'Reggae One',
    italic: false,
    postscriptName: 'ReggaeOne-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Reggae+One',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'RocknRoll One',
    italic: false,
    postscriptName: 'RocknRollOne-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=RocknRoll+One',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'DotGothic16',
    italic: false,
    postscriptName: 'DotGothic16-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=DotGothic16',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'Palette Mosaic',
    italic: false,
    postscriptName: 'PaletteMosaic-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Palette+Mosaic',
    supportLangs: ['ja'],
  },
  {
    family: 'Shippori Mincho',
    italic: false,
    postscriptName: 'ShipporiMincho-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Shippori+Mincho:wght@400;700',
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'Shippori Mincho',
    italic: false,
    postscriptName: 'ShipporiMincho-Bold',
    style: 'Bold',
    weight: 700,
    supportLangs: ['ja', 'zh-tw'],
  },
  {
    family: 'Hachi Maru Pop',
    italic: false,
    postscriptName: 'HachiMaruPop-Regular',
    style: 'Regular',
    weight: 400,
    queryString: 'family=Hachi+Maru+Pop',
    supportLangs: ['ja'],
  },
  {
    family: 'ZCOOL XiaoWei',
    italic: false,
    postscriptName: 'ZCOOLXiaoWei-Regular',
    style: 'Regular',
    weight: 400,
    supportLangs: ['zh-cn'],
  },
];

const applyStyle = (fontsInUse: WebFont[]): void => {
  const query = fontsInUse.filter((font) => font.queryString)
    .map((font) => font.queryString)
    .join('&');

  const queryString = `https://fonts.googleapis.com/css2?${query}&display=swap`;
  const link = document.createElement('link');
  link.setAttribute('href', queryString);
  link.setAttribute('rel', 'stylesheet');
  const head = document.querySelector('head');
  head?.appendChild(link);
};

const getAvailableFonts = (lang: string): WebFont[] => fonts.filter((font) => {
  if (!font.supportLangs) return true;
  return font.supportLangs.includes(lang);
});

export default {
  getAvailableFonts,
  applyStyle,
};
