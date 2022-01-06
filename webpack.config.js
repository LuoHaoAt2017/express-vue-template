const fs = require("fs");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const views = path.join(__dirname, "src/assets");
module.exports = {
  mode: "development",
  entry: fs.readdirSync(views).reduce(function (entries, dir) {
    if (fs.existsSync(path.join(views, dir, "index.js"))) {
      entries[dir] = path.join(views, dir, "index.js");
    }
    return entries;
  }, {}),
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "src/__build__"),
    publicPath: "/__build__/",
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
  resolve: {},
  plugins: [
    new VueLoaderPlugin()
  ],
};
