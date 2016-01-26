var http = require('http');
http.get('http://192.168.102.75:8124', function(response) {
	var body = [];
	console.log('[+][-]' + response.statusCode);
	console.log('[+][-]response.headers');
	console.log(response.headers);
	response.on('data', function(chunk) {
		body.push(chunk);
	});
	response.on('end', function() {
		body = Buffer.concat(body);
		console.log(body.toString());
	});
});