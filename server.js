//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port = process.env.PORT;

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})


