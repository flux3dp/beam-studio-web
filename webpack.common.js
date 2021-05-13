const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      app: path.resolve(__dirname, 'src/web/app/'),
      helpers: path.resolve(__dirname, 'src/web/helpers/'),
      interfaces: path.resolve(__dirname, 'src/web/interfaces/'),
      implementations: path.resolve(__dirname, 'src/implementations/'),
    }
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
      // {
      //   test: /\.(css|scss)$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      //   use: ['file-loader'],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
