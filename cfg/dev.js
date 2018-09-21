const path = require('path');
const webpack = require('webpack');
const merge = require('lodash/merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./base');

const config = merge({
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8100',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index',
  ],
  devtool: 'eval',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: 'app.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  mode: 'development',
  performance: {
    hints: false,
  },
}, baseConfig);

config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [path.join(__dirname, '/../src')],
});

module.exports = config;
