import { WebpackConfiguration } from 'webpack-dev-server';
import { buildDevServer } from './build.dev-server';
import { buildLoaders } from './build.loaders';
import { buildPlugins } from './build.plugins';
import { buildResolvers } from './build.resolvers';
import { BuildOptions } from './types/types';


export function buildWebpack(options: BuildOptions): WebpackConfiguration {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode ?? 'development',
    entry: options.path.entry,
    output: {
      path: options.path.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map': 'source-map',
    devServer: isDev ? buildDevServer(options): undefined,
  }
}