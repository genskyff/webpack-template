"use strict";

const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: { index: path.resolve("./src/index.tsx") },
  output: {
    path: path.resolve("./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve("./src"),
        use: ["babel-loader"],
      },
      {
        test: /\.(bmp|png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        include: path.resolve("./src"),
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "..."],
    modules: [path.resolve("./src"), "node_modules"],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /ja|zh-cn|zh-tw|en/
    ),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
