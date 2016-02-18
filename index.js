'use strict';

var express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    HomePage = React.createFactory(require('./app/scripts/raw/HomePage-raw')),
    app = express();

app.use('/app/', express.static(__dirname + '/app/'));

app.get('/', function(req, res){
    var props = {
            blip: "May with you, be the props!!"
        }
    var reactHTML = ReactDOMServer.renderToString(HomePage(props));
    var html =
    '<!DOCTYPE html>'
       +'<html>'
       +'<head>'
       +'<link rel="stylesheet" href="/app/styles/bootstrap.min.css">'
       +'<link rel="stylesheet" href="/app/styles/cleaner.css">'
       +'<title>Pub List</title>'
       +'</head>'
       +'<body>'
       +'<div id="app">'
       +reactHTML
       +'</div>'
       +'<script>'
       +'var APP_PROPS = ' + JSON.stringify(props.blip) + ';'
       +'</script>'
       +'<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>'
       +'<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>'
       +'<script src="/app/scripts/bundle/bundle.js"></script>'
       +'</body>'
       +'</html>';

       res.send(html);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
