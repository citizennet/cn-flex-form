'use strict';

const webpack = require('webpack');
const externals = require('webpack-node-externals');

const base = () => ({
  entry: {
    all: './src/_cn-flex-form.module.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: 'cn-flex-form',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader!eslint-loader',
      exclude: /node_modules/
    }]
  },

  externals: [
    externals({ importType: 'umd' })
  ]
});

const dev = base();

const test = base();
test.entry = {
  test: './webpack.test.bootstrap.js'
};
test.node = {
  fs: 'empty'
};
test.externals = [];

const prod = base();
prod.output.filename = '[name].min.js';
prod.devtool = 'source-map';
prod.plugins = [
  // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  // Only emit files when there are no errors
  new webpack.NoErrorsPlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  // Dedupe modules in the output
  new webpack.optimize.DedupePlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = [dev, test, prod];
