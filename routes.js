var http = require('http'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    HomePage = React.createFactory(require('./app/scripts/modules/home/HomePage-raw')),
    propsData = require('./app/scripts/modules/utils/propsData'),
    promiseMe = require('./app/scripts/modules/utils/promiseMe'),
    Login = React.createFactory(require('./app/scripts/modules/login/Login-raw'));

exports.route = function(req, res){
    var reactHTML = ReactDOMServer.renderToString(HomePage(propsData));
    var html =
    '<!DOCTYPE html>'
       +'<html>'
       +'<head>'
       +'<link rel="stylesheet" href="/app/styles/bootstrap.min.css">'
       +'<link rel="stylesheet" href="/app/styles/cleaner.css">'
       +"<link rel='icon' type='image/png' href='app/assets/apple-icon.png'>"
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
       +'<script async src="/app/scripts/bundle/home-bundle.js"></script>'
       +'</body>'
       +'</html>';

       res.send(html);
}

exports.taskApp = function(req, res){
    return http.get({
        hostname: "localhost",
        port: "5000",
        path: "/app/data/users.json"
    }, function(response){
        response.on('data', function(chunk){
            var userData = JSON.parse(chunk),
                reactHTML = ReactDOMServer.renderToString(Login(userData));
            var html =
            '<!DOCTYPE html>'
               +'<html>'
               +'<head>'
               +'<link rel="stylesheet" href="/app/styles/bootstrap.min.css">'
               +'<link rel="stylesheet" href="/app/styles/cleaner.css">'
               +"<link rel='icon' type='image/png' href='app/assets/apple-icon.png'>"
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
               +'<script async src="/app/scripts/bundle/login-bundle.js"></script>'
               +'</body>'
               +'</html>';
            res.send(html);
        });
    });
}

exports.getWebhook = function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === process.env.MESSENGER_VERIFY_TOKEN) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
};
