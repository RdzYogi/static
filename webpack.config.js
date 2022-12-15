const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode : 'production',
  output: {
    filename: 'main.js',
    publicPath: '/static/',
    path: __dirname + '/dist',
    library: 'webpackGhPages',
    // path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
