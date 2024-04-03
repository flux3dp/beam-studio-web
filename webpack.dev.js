const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    compress: true,
    host: '0.0.0.0',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
    hashFunction: 'xxhash64',
  },
});
