const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [
      path.join(__dirname, 'public/js/lib'),
      'node_modules',
    ],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      app: path.resolve(__dirname, 'src/web/app/'),
      helpers: path.resolve(__dirname, 'src/web/helpers/'),
      interfaces: path.resolve(__dirname, 'src/web/interfaces/'),
      implementations: path.resolve(__dirname, 'src/implementations/'),
      /* from beam-studio */
      jquery: path.join(__dirname, 'public/js/lib/svgeditor/jquery'),
      underscore: path.join(__dirname, 'public/js/lib/underscore'),
      svgeditor: path.join(__dirname, 'public/js/lib/svgeditor'),
      imagetracer: path.join(__dirname, 'public/js/lib/svgeditor/imagetracer'),
      // cssHome: '../css/3rd-party-plugins',
      // freetrans: 'plugins/freetrans/jquery.freetrans',
      jqueryGrowl: path.join(__dirname, 'public/js/lib/jquery.growl'),
      dxf2svg: path.join(__dirname, 'public/js/lib/dxf2svg'),
      // SVG Editor Libraries Begin
      jsHotkeys: path.join(__dirname, 'public/js/lib/svgeditor/js-hotkeys/jquery.hotkeys.min'),
      jquerybbq: path.join(__dirname, 'public/js/lib/svgeditor/jquerybbq/jquery.bbq.min'),
      svgicons: path.join(__dirname, 'public/js/lib/svgeditor/svgicons/jquery.svgicons'),
      jgraduate: path.join(__dirname, 'public/js/lib/svgeditor/jgraduate/jquery.jgraduate.min'),
      spinbtn: path.join(__dirname, 'public/js/lib/svgeditor/spinbtn/JQuerySpinBtn.min'),
      touch: path.join(__dirname, 'public/js/lib/svgeditor/touch'),
      svgedit: path.join(__dirname, 'public/js/lib/svgeditor/svgedit'),
      jquerySvg: path.join(__dirname, 'public/js/lib/svgeditor/jquery-svg'),
      jqueryContextMenu: path.join(__dirname, 'public/js/lib/svgeditor/contextmenu/jquery.contextMenu'),
      pathseg: path.join(__dirname, 'public/js/lib/svgeditor/pathseg'),
      browser: path.join(__dirname, 'public/js/lib/svgeditor/browser'),
      svgtransformlist: path.join(__dirname, 'public/js/lib/svgeditor/svgtransformlist'),
      math: path.join(__dirname, 'public/js/lib/svgeditor/math'),
      units: path.join(__dirname, 'public/js/lib/svgeditor/units'),
      svgutils: path.join(__dirname, 'public/js/lib/svgeditor/svgutils'),
      sanitize: path.join(__dirname, 'public/js/lib/svgeditor/sanitize'),
      history: path.join(__dirname, 'public/js/lib/svgeditor/history'),
      historyrecording: path.join(__dirname, 'public/js/lib/svgeditor/historyrecording'),
      coords: path.join(__dirname, 'public/js/lib/svgeditor/coords'),
      recalculate: path.join(__dirname, 'public/js/lib/svgeditor/recalculate'),
      select: path.join(__dirname, 'public/js/lib/svgeditor/select'),
      draw: path.join(__dirname, 'public/js/lib/svgeditor/draw'),
      layer: path.join(__dirname, 'public/js/lib/svgeditor/layer'),
      path: path.join(__dirname, 'public/js/lib/svgeditor/path'),
      // svgcanvas: 'public/js/lib/svgeditor/svgcanvas',
      clipper_unminified: path.join(__dirname, 'public/js/lib/clipper_unminified'),
      svgnest: path.join(__dirname, 'public/js/lib/svg-nest/svgnest'),
      svgnestGeoUtil: path.join(__dirname, 'public/js/lib/svg-nest/util/geometryutil'),
      svgnestParallel: path.join(__dirname, 'public/js/lib/svg-nest/util/parallel'),
      svgnestEval: path.join(__dirname, 'public/js/lib/svg-nest/util/eval'),
      jqueryUi: path.join(__dirname, 'public/js/lib/svgeditor/jquery-ui/jquery-ui-1.8.17.custom.min'),
      jpicker: path.join(__dirname, 'public/js/lib/svgeditor/jgraduate/jpicker'),
      canvg: path.join(__dirname, 'public/js/lib/svgeditor/canvg/canvg'),
      rgbcolor: path.join(__dirname, 'public/js/lib/svgeditor/canvg/rgbcolor'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dist/img') },
      ],
    }),
  ],
};
