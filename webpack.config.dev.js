const webpack = require("webpack");
const {
  buildPath,
  srcPath,
  indexHTML,
  indexTSX,
  publicPath
} = require("./paths");
const openBrowser = require("react-dev-utils/openBrowser");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["react-dev-utils/webpackHotDevClient", indexTSX],
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    // hot: !!1,
    compress: !!1,
    clientLogLevel: "none",
    port: 8080,
    historyApiFallback: !!1,
    publicPath: "/",
    disableHostCheck: !!1,
    contentBase: publicPath
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: indexHTML,
      inject: !!1
    })
  ]
};

setTimeout(() => openBrowser("http://localhost:8080"), 2000);
