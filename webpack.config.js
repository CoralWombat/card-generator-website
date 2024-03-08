const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package.json");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  return {
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].bundle.js",
      clean: true,
    },
    devServer: {
      port: 3030,
      historyApiFallback: true,
    },
    devtool: argv.mode === "development" ? "source-map" : undefined,
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html", // to import index.html file inside index.js
        favicon: "./src/media/icon/favicon.png",
      }),
      new webpack.DefinePlugin({
        "process.env.APP_VERSION": JSON.stringify(packageJson.version),
        "process.env.APP_NAME": JSON.stringify(packageJson.name),
        "process.env.APP_AUTHOR": JSON.stringify(packageJson.author),
        "process.env.APP_LICENSE": JSON.stringify(packageJson.license),
      }),
      argv.mode === "development" ? new BundleAnalyzerPlugin() : "",
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          // `ts` and `tsx`
          test: /\.(ts|tsx)$/i,
          loader: "babel-loader",
        },
        {
          // css, scss and sass files
          test: /\.(sa|sc|c)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          // html files in templates folder
          test: /templates.*\.html$/i,
          loader: "html-loader",
          options: {
            minimize: {
              minifyCSS: false,
            },
          },
        },
        {
          test: /\.svg$/i,
          loader: "@svgr/webpack",
        },
      ],
    },
  };
};
