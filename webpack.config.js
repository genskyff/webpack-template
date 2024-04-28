const { merge } = require("webpack-merge");
const baseConfig = require("./config/webpack.base");
const devConfig = require("./config/webpack.dev");
const prodConfig = require("./config/webpack.prod");

module.exports = (env, args) => {
  switch (args.mode) {
    case "development":
      return merge(baseConfig, devConfig);
    case "production":
      return merge(baseConfig, prodConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
