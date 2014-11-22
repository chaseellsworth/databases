//handles requests between server(request info) and database

var db = require('../db');


module.exports = {

  messages: {

    get: function (roomname, callback) {
      //query the database (calling functions that you create in index.js --db)
      db.select(roomname, callback);
    },

    post: function (messageObject, callback) {
      db.insert(messageObject, callback);
    } // a function which can be used to insert a message into the database

  }; // a function which produces all the messages

};

  // users: {
  //   // Ditto as above.
  //   get: function () {
  //     //query the database for user info
  //   },
  //   post: function () {
  //     //create new user
  //   },
  // }

  // rooms: {
  //   // Ditto as above.
  //   get: function () {
  //     //query the database for room info
  //   },
  //   post: function () {
  //     //create new room
  //   },
  // }
// };

