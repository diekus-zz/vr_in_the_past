var express = require("express");
var eval = require("./app/components/evaluation.js");

// global data
var playerCount = 0;

//require("./components/falling-dices-component.js");
//use the application off of express.
var app = express();
app.use(express.static(__dirname + "/app"));

//define the route for "/"
app.get("/", function (request, response){
  //show this file when the "/" is requested
  
  response.sendFile(__dirname+"/app/views/index.html");
});

app.get("/vr_in_the_past", function (request, response){

  playerCount++;

  var query = require('url').parse(request.url,true).query;
  eval.recordPreTest(query, playerCount);
  //eval.recordPreTest(query.name, query.age, query.sex);

  //show this file when the "/vr_in_the_past" is requested
  response.sendFile(__dirname+"/app/views/vr_in_the_past.html");
});

app.get("/post_test", function (request, response){

  var query = require('url').parse(request.url,true).query;
  eval.recordSummary(query, playerCount); // .summary

  //show this file when the "/vr_in_the_past" is requested
  response.sendFile(__dirname+"/app/views/post_test.html");
});

app.get("/credits", function (request, response){

  var query = require('url').parse(request.url,true).query;
  eval.recordPostTest(query, playerCount); // .summary

  //show this file when the "/vr_in_the_past" is requested
  response.sendFile(__dirname+"/app/views/credits.html");
});

//start the server
app.set('port', process.env.PORT || 12810);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
