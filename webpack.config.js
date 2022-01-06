// const fs = require("fs");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const views = path.join(__dirname, "src/assets");

module.exports = {
  // entry: fs.readdirSync(views).reduce(function (entries, dir) {
  //   if (fs.existsSync(path.join(views, dir, "index.js"))) {
  //     entries[dir] = path.join(views, dir, "index.js");
  //   }
  //   return entries;
  // }, {}),
  entry: {
    index: './client/index.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "server/__build__"),
    // publicPath: "/__build__/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.ico'),
      title: 'express-vue-template',
    }),
  ],
};
