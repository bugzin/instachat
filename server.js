var http = require('http'),
    sys  = require('sys');

var express = require('express');

var app  = express.createServer();

app.configure(function(){
	app.use('view engine','jade');
	app.use(express.static(__dirname + '/client'));
	app.use(express.bodyParser());
});

app.get('/',function(req,res){
	res.render('index.jade',{title:'Chat Room'});
});

app.get('/room',function(req,res){
	res.render('room.jade',{title:'Chat Room'});
});
    
var io = require('socket.io').listen(app);
io.set('log level', 1);

io.sockets.on('connection',function(socket){
	console.log('Connected');
	socket.on('join', function(name){
		socket.join(name.room);
		var info = JSON.stringify(name);
		socket.set('nickname', info, function () { socket.emit('ready'); });
	});
	
	socket.on('msg', function(msg){
		console.log(JSON.stringify(msg))
	});
});

app.listen(8005);