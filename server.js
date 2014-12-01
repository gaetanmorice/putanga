var http = require('http');

var message = process.env.MESSAGE || "Putanga!";

http.createServer(function(request, response){
	response.end(message);
}).listen(80);