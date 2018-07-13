const path = require('path');
const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = {
  entry: ['./src/clients/Index.js', 'webpack-hot-middleware/client?path=http://localhost:8000/__webpack_hmr'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'development',
  plugins: [
    new SimpleProgressWebpackPlugin({
      format: 'expanded'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};