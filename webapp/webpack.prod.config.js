var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: 'web',
  cache: 'false',
  entry: {
    app: [
      './js/app',
    ],
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'scripts'],
  },
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    pathInfo: true,
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules|sd-ui|bower_components/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-2'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
  ],
};
