var path = require('path');
var request = require('request');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// modify original webpack config to include react-hot-loader
config.entry.bundle.unshift(
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
);
config.module.loaders[1].loaders.unshift('react-hot');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  proxy: {
    "/api/v1/*": "http://localhost:3000",
  },
  stats: { colors: true }
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});

// FIXME: this is not how you're supposed to do it:

server.app.use(function pushStateHook(req, res, next) {
  var ext = path.extname(req.url);
  if ((ext === '' || ext === '.html') && req.url !== '/') {
    req.pipe(request('http://localhost:8080')).pipe(res);
  } else {
    next();
  }
});