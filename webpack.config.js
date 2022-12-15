const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode : 'development',
  output: {
    filename: 'main.js',
    publicPath: '/static/',
    path: __dirname + '/dist',
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
