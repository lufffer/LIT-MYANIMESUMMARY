const { default: HtmlWebpackPlugin } = require("html-webpack-plugin");
const { default: MiniCssExtractPlugin } = require("mini-css-extract-plugin");
const { default: CopyWebpackPlugin } = require("copy-webpack-plugin");
const { default: CssMinimizerPlugin } = require("css-minimizer-webpack-plugin");
const { default: TerserJSPlugin } = require("terser-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
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
      patterns: [{ from: "./public/assets/imgs", to: "./" }],
    }),
  ],
  optimizations: {
    minimizer: [new CssMinimizerPlugin(), new TerserJSPlugin({})],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
  resolve: {
    extensions: [".css", ".js", ".ts"],
  },
};
