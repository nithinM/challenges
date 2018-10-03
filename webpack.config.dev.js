const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: []
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    // host: "0.0.0.0",
    port: 3000,
    historyApiFallback: true,
    // disableHostCheck: true,
    publicPath: "/assets/"
  }
});
