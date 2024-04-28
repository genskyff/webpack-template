const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        include: path.resolve(__dirname, "../src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]",
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
      template: path.resolve(__dirname, "../index.html"),
    }),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3000,
  },
};
