const path = require('path');

module.exports = {
  entry: './client/index.js',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    port: 8080,
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, './node_modules/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        exclude: path.resolve(__dirname, './node_modules/'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
