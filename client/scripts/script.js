(function($){
	var socket = io.connect();
	socket.on('connect', function(){
		
		socket.on('msg',function(msg){
			alert(msg)
		});
		
		socket.on('disconnect', function(){
			
		});
	});
	
	$(function(){
		$('#login .button').click(function(){
			var handle = $('#handle').val();
			if(handle == ""){
				alert('Please enter nick name!')
			}else{
				var room = this.innerText;
				location.href = "/room";
				socket.emit('join',{room: room, handle: handle});
			}
		});
		
		$("#send").click(function(){
			var msg = $('textarea').val();
			socket.emit('msg',{msg: msg});
		});
	});
})(jQuery);