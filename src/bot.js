"use strict";

var trello = require('./services/trello');

module.exports = {
  meetingBot: trello.meetingSchedule,

  sample: function (req, res, next) {
    var user = req.body.username;
    console.log(req.body);
    var botPayload = {
      text : 'Hi, ' + user + '! this is a test.'
    };

    // avoid infinite loop
    if (user !== 'slackbot') {
      return res.status(200).json(botPayload);
    } else {
      return res.status(200).end();
    }
  }
}
