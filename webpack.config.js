const ComponentPlugin = require('./plugin/component')
const path = require('path')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.art$/,
        exclude: /(node_modules|bower_components)/,
        loader: path.join(__dirname, './plugin/loader.js'),
      },
    ],
  },
  plugins: [
    new ComponentPlugin(),
  ],
  entry: {
    hello: './src/index',
  },
  output: {
    filename: 'dist/index.js',
  },
}
