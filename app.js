var mongoose = require('mongoose');
var async = require('async');
var express = require('express');
var bodyParser = require('body-parser');
var jade = require('jade');

var app = express();
var jsonParser = bodyParser.json();

var routes = require('./routes/index.js');

app.set('view engine', 'jade');
app.set('views', './views');


var Listing = require('./lib/listings.js');
var Account = require('./lib/accounts.js')

mongoose.connect('mongodb://localhost/clark_back_end');








app.use('/', routes);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server listening at http://%s:%s', host, port);
});
