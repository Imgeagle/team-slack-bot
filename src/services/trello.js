/**
 * this module use node-trello from https://github.com/adunkman/node-trello
 * node-trello currently maintained by @adunkman
 * Please refer to the offical API doc to write http request [https://developers.trello.com/]
 *
 * @auther Tony Li
 */

"use strict";

var Trello = require("node-trello");
var t = new Trello("YOUR API KEY", "TOKEN");

module.exports = {
  meetingSchedule: function(req, res, next){
    var userName = req.body.user_name;

    // avoid infinite loop
    if (userName !== 'slackbot') {
      // example fetch a list name
      t.get("/1/cards/5696150bea55ab6eaafee076/name", function(err, data) {
        if (err) throw err;
        return res.status(200).json({text : 'Hi, ' + userName + '!, next meeting will be held on '+data._value+'.'});
      })
    } else {
      return res.status(200).end();
    }
  },
}
