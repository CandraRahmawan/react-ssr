const path = require('path');
const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = {
  entry: [
    './src/clients/Index.js',
    'webpack-hot-middleware/client?path=http://localhost:8000/__webpack_hmr',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-inline-import-loader',
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  'inline-import',
                  {
                    extensions: ['.txt'],
                  },
                ],
              ],
              cacheDirectory: false,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'expanded',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
};
