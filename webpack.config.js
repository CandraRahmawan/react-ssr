const path = require('path');
const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/clients/Index.js',
    'webpack-hot-middleware/client?path=http://localhost:8000/__webpack_hmr',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
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
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'expanded',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'development',
};
