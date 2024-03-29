const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package.json");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
  nodeModules: path.join(__dirname, "node_modules"),
};

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
      alias: {
        Pictures: path.resolve(__dirname, "src/media/pictures/"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html", // to import index.html file inside index.js
        favicon: "./src/media/icon/favicon.png",
        meta: {
          "og:title": { property: "og:title", content: "Forge of Cards" },
          "og:description": {
            property: "og:description",
            content: "The website for prototyping your cards effortlessly.",
          },
          "og:type": { property: "og:type", content: "website" },
          "og:url": {
            property: "og:url",
            content: "https://forgeofcards.com/",
          },
          "og:image": {
            property: "og:image",
            content: "https://forgeofcards.com/favicon.png",
          },
        },
      }),
      new webpack.DefinePlugin({
        "process.env.APP_VERSION": JSON.stringify(packageJson.version),
        "process.env.APP_NAME": JSON.stringify(packageJson.name),
        "process.env.APP_AUTHOR": JSON.stringify(packageJson.author),
        "process.env.APP_LICENSE": JSON.stringify(packageJson.license),
      }),
      new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
      new PurgeCSSPlugin({
        paths: glob.sync(
          [`${PATHS.src}/**/*`, `${PATHS.nodeModules}/primereact/**/*`],
          {
            nodir: true,
          }
        ),
      }),
      new CopyPlugin({
        patterns: [{ from: "CNAME", to: "./" }],
      }),
    ],
    module: {
      rules: [
        {
          // `ts` and `tsx`
          test: /\.(ts|tsx)$/i,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          // css, scss and sass files
          test: /\.(sa|sc|c)ss$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          // html files in templates folder
          test: /templates.*\.html$/i,
          loader: "html-loader",
          options: {
            minimize: false,
          },
        },
        {
          test: /\.svg$/i,
          loader: "@svgr/webpack",
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
