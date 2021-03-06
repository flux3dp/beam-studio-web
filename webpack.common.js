const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
    clean: true,
  },
  mode: 'development',
  resolve: {
    modules: [
      path.join(__dirname, 'public/js/lib'),
      'node_modules',
    ],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      app: path.resolve(__dirname, 'src/web/app/'),
      helpers: path.resolve(__dirname, 'src/web/helpers/'),
      "core-interfaces": path.resolve(__dirname, 'src/web/interfaces/'),
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
      coords: path.join(__dirname, 'public/js/lib/svgeditor/coords'),
      recalculate: path.join(__dirname, 'public/js/lib/svgeditor/recalculate'),
      draw: path.join(__dirname, 'public/js/lib/svgeditor/draw'),
      layer: path.join(__dirname, 'public/js/lib/svgeditor/layer'),
      path: path.join(__dirname, 'public/js/lib/svgeditor/path'),
      // svgcanvas: 'public/js/lib/svgeditor/svgcanvas',
      clipper_unminified: path.join(__dirname, 'public/js/lib/clipper_unminified'),
      jqueryUi: path.join(__dirname, 'public/js/lib/svgeditor/jquery-ui/jquery-ui-1.8.17.custom.min'),
      jpicker: path.join(__dirname, 'public/js/lib/svgeditor/jgraduate/jpicker'),
      canvg: path.join(__dirname, 'public/js/lib/svgeditor/canvg/canvg'),
      rgbcolor: path.join(__dirname, 'public/js/lib/svgeditor/canvg/rgbcolor'),
    },
    fallback: {
      fs: false,
      stream: false,
      util: false,
      buffer: false,
      events: false,
    },
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.worker\.ts$/,
        loader: 'worker-loader',
      },
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
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dist/img') },
        { from: path.resolve(__dirname, 'src/assets/video'), to: path.resolve(__dirname, 'dist/video') },
        { from: path.resolve(__dirname, 'public/js/lib/svgeditor/extensions'), to: path.resolve(__dirname, 'dist/js/lib/svgeditor/extensions') },
        { from: path.resolve(__dirname, 'public/js/lib/svgeditor/images'), to: path.resolve(__dirname, 'dist/js/lib/svgeditor/images') },
        { from: path.resolve(__dirname, 'public/js/lib/svg-nest'), to: path.resolve(__dirname, 'dist/js/lib/svg-nest') },
        { from: path.resolve(__dirname, 'public/js/lib/dxf2svg.js'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, 'public/js/lib/svgeditor/imagetracer.js'), to: path.resolve(__dirname, 'dist') },

      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};
