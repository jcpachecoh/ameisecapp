// const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
});
