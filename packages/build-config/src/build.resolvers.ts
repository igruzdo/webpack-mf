import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildResolvers(options?: BuildOptions): WebpackConfiguration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.path.src,
    }
  }
}