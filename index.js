'use strict';

var express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    HomePage = React.createFactory(require('./app/scripts/raw/HomePage-raw')),
    app = express(),
    compress = require('compression'),
    propsData = require('./app/scripts/src/propsData');

app.set('port', (process.env.PORT || 5000));

app.use(compress());
app.use('/app/', express.static(__dirname + '/app/'));

app.get('/', function(req, res){
    var reactHTML = ReactDOMServer.renderToString(HomePage(propsData));
    var html =
    '<!DOCTYPE html>'
       +'<html>'
       +'<head>'
       +'<link rel="stylesheet" href="/app/styles/bootstrap.min.css">'
       +'<link rel="stylesheet" href="/app/styles/cleaner.css">'
       +'<title>Silly Poke</title>'
       +'<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0">'
       +'<meta charset="UTF-8">'
       +'<meta name="description" content="Silly Pokemon rendered server side!!">'
       +'<meta name="keywords" content="Silly Pokemon, silly Poke, server side rendering, react">'
       +'</head>'
       +'<body>'
       +'<div id="app">'
       +reactHTML
       +'</div>'
       +'<script src="/app/scripts/bundle/bundle.js"></script>'
       +'</body>'
       +'</html>';

       res.send(html);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
