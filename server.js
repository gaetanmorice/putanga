var http = require('http');

var version = "2.0.0";

http.createServer(function(request, response){
	response.end(version);
}).listen(80);