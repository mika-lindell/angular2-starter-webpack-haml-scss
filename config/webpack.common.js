var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  // Entry points for searching files
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },

      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },

      { 
        test: /\.haml$/,
        exclude: /node_modules/,
        loaders: ["template-html-loader?engine=haml-coffee"] // https://github.com/jtangelder/template-html-loader
      },

      {
        test: /\.(scss|css)$/,
        include: helpers.root('src'),
        loader: ExtractTextPlugin.extract('css!sass') // Styles outside app to file
      }

    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.haml' // Make sure our generated scripts end up somewhere
    })
  ]
};
