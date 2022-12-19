const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "./public", to: "./" }],
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserJSPlugin({})],
  },
  devtool: "source-map",
  devServer: {
    static: "./docs",
  },
  resolve: {
    extensions: [".css", ".js", ".ts"],
  },
};
