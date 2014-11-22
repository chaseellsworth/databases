///handles concern between client and server (request and response)

var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

///from the DOM --> to the app.js(gate to server) --> to the router --> to the controller (as a request) --> ||to the model
//-->to the index.js--db --> to the database --> back to the model --> || back to the controller --> back to the client
