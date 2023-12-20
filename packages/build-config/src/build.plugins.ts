import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { DefinePlugin } from "webpack";
import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
// import ForkTsCheckerwebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): WebpackConfiguration['plugins'] {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const plugins: WebpackConfiguration['plugins'] = [
    new HtmlWebpackPlugin(
      { 
        template: options.path.html,
        publicPath: '/'
      }
    ),
    new DefinePlugin({
      PLATFORM: JSON.stringify(options.platform)
    }),
  ];

  if(isDev) {
    plugins.push(new webpack.ProgressPlugin());
    // plugins.push(new ForkTsCheckerwebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if(isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
  }

  if(options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  
  return plugins;
}