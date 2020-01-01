const path = require('path');

const ConfigWebpackPlugin = require('config-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        loader: 'url-loader',
        options: {
          outputPath: 'assets/',
          publicPath: 'public/assets',
        },
        test: /\.(png|jpe?g|gif)$/i,
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', '..', 'public', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
    }),
    new ConfigWebpackPlugin(),
  ],
};
