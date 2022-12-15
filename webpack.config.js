const path = require('path');


module.exports = {
  entry: './src/index.js',
  mode : 'production',
  output: {
    filename: 'main.js',
    publicPath: '/static/',
    path: __dirname + '/dist',
    library: 'webpackGhPages',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
