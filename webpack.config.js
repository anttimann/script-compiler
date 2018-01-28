const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function createConfig(projectName) {
  return {
    entry: `./${projectName}/script.js`,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `${projectName}.js`,
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
          },
        },
      ],
    },
    plugins: [
      new UglifyJsPlugin({
        sourceMap: true,
      }),
      new webpack.BannerPlugin({
        banner: `name:[filebase], date:${new Date()}, hash:[hash], chunkhash:[chunkhash]'`,
      }),
    ],
    stats: {
      colors: true,
    },
    devtool: 'source-map',
  };
}

module.exports = env => createConfig(env.project);
