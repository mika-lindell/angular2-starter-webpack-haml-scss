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
        test: /\.html$/,
        loader: 'html'
      },

      { 
        test: /\.html\.hamlc$/,
        loaders: ["template-html-loader?engine=haml-coffee"] // https://github.com/jtangelder/template-html-loader
      },
      
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },

      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }

    ],    

    postLoaders: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html.hamlc' // Make sure our generated scripts end up somewhere
    })
  ]
};
