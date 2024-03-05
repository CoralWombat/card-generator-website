const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package.json");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  return {
    output: {
      path: path.join(__dirname, "/dist"), // the bundle output path
      filename: "[name].bundle.js", // the name of the bundle
      clean: true,
    },
    devServer: {
      port: 3030, // you can change the port
      historyApiFallback: true,
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
      usedExports: true,
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html", // to import index.html file inside index.js
      }),
      new webpack.DefinePlugin({
        "process.env.APP_VERSION": JSON.stringify(packageJson.version),
        "process.env.APP_NAME": JSON.stringify(packageJson.name),
        "process.env.APP_AUTHOR": JSON.stringify(packageJson.author),
        "process.env.APP_LICENSE": JSON.stringify(packageJson.license),
      }),
      argv.mode === "development" ? new BundleAnalyzerPlugin() : "",
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // .js and .jsx files
          exclude: /node_modules/, // excluding the node_modules folder
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(sa|sc|c)ss$/, // styles files
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf)$/, // to import images and fonts
          loader: "url-loader",
          options: { limit: false },
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(ts|tsx)$/, // `ts` and `tsx` files are parsed using `ts-loader`
          loader: "ts-loader",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          use: "raw-loader",
        },
      ],
    },
  };
};
