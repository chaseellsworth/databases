//handles requests between server(request info) and database

var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      //query the database (calling functions that you create in index.js --db)
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
      //post to the database
  },

  users: {
    // Ditto as above.
    get: function () {
      //query the database for user info
    },
    post: function () {
      //create new user
    },
  }

  rooms: {
    // Ditto as above.
    get: function () {
      //query the database for room info
    },
    post: function () {
      //create new room
    },
  }
};

