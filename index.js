"use strict";

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));

var bot = require('./src/bot');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

// test bot route
app.post('/test', bot.sample);

// meeting bot route
app.post('/meetup', bot.meetingBot);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
