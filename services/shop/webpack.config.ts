import { WebpackConfiguration } from 'webpack-dev-server';
import { BuildPath, Mode, PlatformMode, buildWebpack } from '@packages/build-config';
import path from 'path';
import webpack from 'webpack';
import packageJson from './package.json';

interface EnvVars {
  mode: Mode;
  port: number;
  analyzer: boolean;
  platform: PlatformMode;
}

export default (env: EnvVars) => {
  const buildPath: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: WebpackConfiguration = buildWebpack({
    port: env.port ?? 3001,
    mode: env.mode ?? 'development',
    path: buildPath,
    platform: env.platform,
    analyzer: env.analyzer,
  })


  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: 'shop',
      filename: 'remoteEntry.js',
      exposes: {
        './Router': './src/router/router.tsx',
      },
      shared: {
        ...packageJson.dependencies,
        'react': {
          eager: true,
          requiredVersion: packageJson.dependencies['react'],
        },
        'react-router-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-router-dom'],
        },
        'react-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      }
    })
  )

  return config;
}