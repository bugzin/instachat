var http = require('http'),
    sys  = require('sys');

var express = require('express');

var app  = express.createServer(function(req, res){
	res.end("Chat Room using socke");
});







app.listen(8005);