import { PluginItem } from "@babel/core";
import { BuildOptions } from "../types/types";
import { removeDataIdBabelPlugin } from "./remove-dataid-babel-plugin";

export function buildBabelLoader(options: BuildOptions) {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';
  const plugins: PluginItem[] = [];

  if(isProd) {
    plugins.push(
      [
        removeDataIdBabelPlugin,
        {
          props: ['data-testid']
        }
      ]
    )
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env', 
          '@babel/preset-typescript',
          ['@babel/preset-react', {
            runtime: isDev ? 'automatic' : 'classic',
          }],
        ],
        plugins: plugins.length ? plugins : undefined,
      },
    }
  }
}