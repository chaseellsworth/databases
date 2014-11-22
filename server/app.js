//just get the port running--load server
var express = require('express');
var db = require('./db');
var morgan = require('morgan');
var parser = require('body-parser');
var router = require('./routes.js');
var app = express();
module.exports.app = app;
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));  "/"
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

// app.get('/', function(req, res){
//   res.send('class');
// })
// app.get('/classes', function(req, res){
//   res.send('class');
// })
// app.get('/door', function(req, res){
//   res.send('doors');
// })
// app.get('/car', function(req, res){
//   res.send('cars');
// })
