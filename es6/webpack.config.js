const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 8000;

module.exports = {
  entry: [
    "webpack/hot/dev-server",
    `webpack-dev-server/client?http://localhost:${port}`,
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: "/node_modules/"
      }
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
    historyApiFallback: true,
    hot: true,
    headers: {
      "X-Custom-Foo": "bar"
    },
    port,
    publicPath: "/"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin({})
  ],
  performance: {
    hints: false
  }
};
