var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();

module.exports.select = function(roomname, callback){
  var whereClause = "";
  if(roomname !== undefined){
    whereClause = "WHERE M.room_id=" + roomId + " ";
  }
  var queryString = "SELECT M.id, U.username, R.roomname, M.text, M.createdAt " +
                    "FROM messages M " +
                    "INNER JOIN users U " +
                      "ON U.id=M.user_id " +
                    "INNER JOIN rooms R " +
                      "ON R.id=M.room_id " +
                    whereClause +
                    "ORDER BY M.createdAt desc";
  dbConnection.query(queryString, callback); //VERIFY!!
}

module.exports.insert = function(messageObject, callback){
  messageObject.room = messageObject.room || 1;
  var queryString = "INSERT INTO messages" +
                    "VALUES ( null," + messageObject.user + "," + messageObject.room + "," + messageObject.text + "," + "'')" ;
  dbConnection.query(queryString, callback); //VERIFY!!
}
//all the functions to query the database, you'll use them outside of the file in the model
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports.query = function(queryString, queryArgs, callback){
//   dbConnection.query(queryString, queryArgs, callback);
// }

// 1 figure out how to send to the database
//
//
