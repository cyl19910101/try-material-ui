const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");
module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("ts-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
