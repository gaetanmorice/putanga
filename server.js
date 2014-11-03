var http = require('http');

var version = "1.0.0";

http.createServer(function(request, response){
	response.end(version);
}).listen(8888);