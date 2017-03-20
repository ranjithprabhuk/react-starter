
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin( {
      filename: "css/style.css",
      allChunks: true
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

