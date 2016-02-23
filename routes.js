var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    HomePage = React.createFactory(require('./app/scripts/raw/HomePage-raw')),
    propsData = require('./app/scripts/src/propsData');

exports.route = function(req, res){
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
       +'<script async src="/app/scripts/bundle/bundle.js"></script>'
       +'</body>'
       +'</html>';

       res.send(html);
}
