var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './main.js',
 output: { path: __dirname + '/app/scripts/bundle', filename: 'bundle.js' },
 module: {
   loaders: [
   {
     test: /.jsx?$/,
     loader: 'babel',
     exclude: /node_modules/,
     query: {presets: ['react']}
   }]
 },
};
