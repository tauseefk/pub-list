var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: {
    home: './app/scripts/modules/home/main.js',
    login: './app/scripts/modules/login/main.js'
 },
 output: {
     path: __dirname + '/app/scripts/bundle',
     filename: '[name]-bundle.js'
 },
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
