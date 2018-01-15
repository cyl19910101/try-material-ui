const { resolve } = require("path");

function getRealPath(relativePath) {
  return resolve(__dirname, relativePath);
}

module.exports = {
  indexTSX: getRealPath("src/index.tsx"),
  srcPath: getRealPath("src"),
  publicPath: getRealPath("public"),
  buildPath: getRealPath("build"),
  indexHTML: getRealPath("public/index.html")
};
