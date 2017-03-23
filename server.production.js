const port = (process.env.PORT || 5001);
const path = require('path');
const express = require('express');


const app = express();
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, '/dist'));

app.use('/dist', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) });


const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.production.config.js')
const compiler = webpack(config);
const compilerOptions = {
  noInfo: true,
  publicPath: config.output.publicPathdist
};

const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, compilerOptions);
const webpackHotMiddlewareInstance = webpackHotMiddleware(compiler);

app.use(webpackDevMiddlewareInstance);
app.use(webpackHotMiddlewareInstance);

webpackDevMiddlewareInstance.waitUntilValid(function () {
  app.listen(port);
  console.log(`Listening at http://localhost:${port}`);
});





