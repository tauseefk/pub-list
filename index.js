'use strict';

var express = require('express'),
    Routes = require('./routes'),
    app = express(),
    compress = require('compression');

app.set('port', (process.env.PORT || 5000));
app.use(compress());
app.use('/app/', express.static(__dirname + '/app/'));

app.get('/', Routes.route);
app.get('/tasks', Routes.taskApp);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
