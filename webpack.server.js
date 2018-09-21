const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require('open');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), config.devServer)
  .listen(8100, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8100');
    console.log('Opening your system browser...');
    open('http://localhost:8100');
  });
