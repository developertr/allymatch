var path = require('path');
var webpack = require('webpack');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  //devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "theme/_theme.scss";',
    includePaths: [path.resolve(__dirname, './src')]
  }
};

if (!(process.env.NODE_ENV === 'production')) {
  config.devtool = 'source-map';
  config.plugins = [
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"dev"'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'AllyMatch',
      template: 'index.template.ejs'
    }),
    new CopyWebpackPlugin([{ from: './favicon.ico' }]),
    new ExtractTextPlugin("styles.[hash].css", { allChunks: true })
  ];
  config.module = {
    loaders: loaders.concat([{
      test: /(\.scss|\.css)$/,
      loaders: [
        'style',
        'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss!sass'
      ]
    }])
  };
  /*config.devServer = {
    contentBase: "./dist",
    noInfo: true, //  --no-info option
    hot: true,
    inline: true
  };
  config.entry = config.entry.concat(['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server',]);*/
} else {
  config.entry = ['./src/index'];
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false,
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify("production")
    }),
    /*new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8
    }),*/
    new HtmlWebpackPlugin({
      title: 'AllyMatch',
      template: 'index.template.ejs'
    }),
    new CopyWebpackPlugin([{ from: './favicon.ico' }]),
    new ExtractTextPlugin("styles.[hash].css", { allChunks: true })
  ];
  config.module = {
    loaders: loaders.concat([{
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
    }])
  };
}

module.exports = config;
