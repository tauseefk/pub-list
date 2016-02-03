'use strict';

var express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    HomePage = require('./app/scripts/raw/HomePage-raw'),
    app = express();

app.use('/app/', express.static(__dirname + '/app/'));

app.get('/', function(req, res){
    var homePageFactory = React.createFactory(HomePage)({});
    var reactHTML = ReactDOMServer.renderToString(homePageFactory);
    var html =
    '<!DOCTYPE html>'
       +'<html>'
       +'<head>'
       +'<link rel="stylesheet" href="/app/styles/bootstrap.min.css">'
       +'<link rel="stylesheet" href="/app/styles/global.css">'
       +'<link rel="stylesheet" href="/app/styles/homePage.css">'
       +'<link rel="stylesheet" href="/app/styles/cleaner.css">'
       +'<title>Pub List</title>'
       +'</head>'
       +'<body>'
       +'<div id="app">'
       +reactHTML
       +'</div>'
       +'<script src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xfp1/t39.3284-6/12512209_757930467645024_1581528137_n.js"></script>'
       +'<script src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.3284-6/12512195_1650705818529971_1541151294_n.js"></script>'
       +'<script src="/app/scripts/bundle/bundle.js"></script>'
       +'</body>'
       +'</html>';

       res.send(html);
})

var server = app.listen(9000, function () {
  var port = server.address().port;
  console.log("Listening on port :" + port);
});
