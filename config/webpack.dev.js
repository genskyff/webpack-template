"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "js/[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        include: path.resolve("./src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[name]__[local]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    moduleIds: "named",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Dev",
      template: path.resolve("./index.html"),
    }),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3000,
  },
};
