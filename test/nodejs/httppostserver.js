var http = require('http');
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
		console.log(body.toString());
		response.end();
	});
}).listen(8124);