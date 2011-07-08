var http = require('http'),
    sys  = require('sys');

var express = require('express');

var app  = express.createServer(function(req, res){
	res.end("Chat Room using socke");
});

app.configure(function(){
	app.use('view engine','jade');
	app.use(express.static(__dirname + '/client'));
	app.use(express.bodyParser());
});

app.get('/',function(req,res){
	res.render('index.jade',{title:'Chat Room'}
});
    )
var io = require('socket.io').listen(app);

io.sockets.on('connection',function(socket){
	console.log('Connected');
});

app.listen(8005);