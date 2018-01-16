const webpack = require("webpack");
const { buildPath, srcPath, indexHTML, indexTSX } = require("./paths");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: indexTSX,
  output: {
    path: buildPath,
    filename: "[name].[chunkhash].js"
  },
  devtool: "source-map",
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
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HTMLPlugin({
      template: indexHTML,
      inject: !!1
    })
  ]
};
