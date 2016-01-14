/**
 * hard to write test for trello, no public api for test
 * add app.use(bodyParser.json()) will pass this test, without this, name will appear undefined
 *
 * so not using travis ci currently
 */

"use strict";

var expect = require('chai').expect;
var request = require('request');

describe('team-slack-bot', function() {
  describe('test', function() {
    it('should respond with redirect on post', function(done) {
      var options = {
        url: 'http://localhost:5000/test',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: "jake"})
      };
      request.post(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal('{"text":"Hi, jake! this is a test."}')
        done()
      });
    });
  })
});
