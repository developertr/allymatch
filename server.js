var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  noInfo: false, //  --no-info option
  hot: true,
  inline: true,
  //public: '192.168.2.104',
  disableHostCheck: true,
  historyApiFallback: {
    index: 'index.html',
    rewrites: [
      { from: /\/soccer/, to: '/soccer.html' }
    ]
  }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
