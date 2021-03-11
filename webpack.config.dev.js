const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    noInfo: true,
    open: false,
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};