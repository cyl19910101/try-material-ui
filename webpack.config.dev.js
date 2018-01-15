const webpack = require("webpack");
const { buildPath, srcPath, indexHTML, indexTSX } = require("./paths");

module.exports = {
  entry: indexTSX,
  output: {
    path: buildPath,
    filename: "[name].[ext]"
  },
  modules: {
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
  }
};
