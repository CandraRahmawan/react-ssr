const path = require('path');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = {
  entry: './src/clients/Index.js',
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
    })
  ]
};