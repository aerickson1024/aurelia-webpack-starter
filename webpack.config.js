const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = () => ({
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: {
    app: ['aurelia-bootstrapper']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.html$/i, exclude: /node_modules/, loader: 'html-loader' },
      { test: /\.js$/i, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new AureliaPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    })
  ]
});
