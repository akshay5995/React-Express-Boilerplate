const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const port = 8100;
const srcPath = path.join(__dirname, './src');
const publicPath = '/assets/';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8100',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index',
  ],
  devtool: 'eval',
  plugins: [
    autoprefixer,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new ExtractTextPlugin('app.css'),
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js',
    publicPath,
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port,
    publicPath,
    proxy: {
      '*': {
        target: 'http://localhost:3100',
      },
    },
    noInfo: false,
  },
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
    alias: {
      actions: `${srcPath}/actions/`,
      components: `${srcPath}/components/`,
      constants: `${srcPath}/constants/`,
      containers: `${srcPath}/containers/`,
      selectors: `${srcPath}/selectors/`,
      sources: `${srcPath}/sources/`,
      stores: `${srcPath}/stores/`,
      styles: `${srcPath}/styles/`,
      config: `${srcPath}/config/${process.env.NODE_ENV}`,
      helpers: `${srcPath}/helpers/`,
      utils: `${srcPath}/utils/`,
      reducers: `${srcPath}/reducers/`,
      images: `${srcPath}/images/`,
      common: `${srcPath}/components/common/`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, '/src')],
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader',
        exclude: `${srcPath}/components/*`,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader',
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader',
      },
      {
        test: /\.(ttf|woff|woff2|eot)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '../fonts',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192',
        options: {
          outputPath: 'fonts/',
          publicPath: '../fonts', // That's the important part
        },
      },
    ],
  },
};
