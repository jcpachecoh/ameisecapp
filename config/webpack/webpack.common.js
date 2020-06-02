const path = require('path');

const ConfigWebpackPlugin = require('config-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all', ///< type of code to put in this bundle
          name: 'vendor', ///< name of bundle
          test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
        },
      },
    },
  },
  output: {
    chunkFilename: '[name].js',
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, '..', '..', 'public', 'dist'),
    publicPath: '/', // Notice this line
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
    }),
    new ConfigWebpackPlugin(),
    new CompressionPlugin(),
  ],
};
