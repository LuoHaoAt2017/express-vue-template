const path = require("path");
const express = require("express");
const webpack = require("webpack");
const favicon = require('serve-favicon');
const WebpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../webpack.config");
const app = express();

const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler, {
  publicPath: "/__build__/"
}));

app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));

app.use(express.static(path.join(__dirname, "assets")));

app.listen(8080, 'localhost', function() {
  console.log('server is running on 8080');
});