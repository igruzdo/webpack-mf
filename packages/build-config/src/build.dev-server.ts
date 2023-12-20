import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): WebpackConfiguration['devServer'] {
  return {
    port: options.port ?? 3000,
    open: true,
    //работает только для дев сервера. Если раздавать статику через nginx, то надо делать проксирование на index.html
    historyApiFallback: true,
    hot: true,
  }
}