var http = require('http');
var url = require('url');
http.createServer(function(request, response) {
	var body = [];
	console.log('[+][-]request.method:' + request.method);
	console.log('[+][-]request.headers:');
	console.log(request.headers);
	response.writeHead(200, { 
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin': '*' 
	});
	request.on('data', function(chunk) {
		body.push(chunk);
		response.write(chunk);
	});
	request.on('end', function() {
		body = Buffer.concat(body);
		console.log('[+][-]Request url :' + request.url);
		console.log('[+][-]Request url parse');
		console.log(url.parse(request.url));
		console.log('[+][-]Request body');
		console.log(body.toString());
		response.end();
	});
}).listen(8124);