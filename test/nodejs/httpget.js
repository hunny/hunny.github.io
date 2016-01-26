var http = require('http');
var url = require('url');
console.log('[+][-]URL Parse:');
var surl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
console.log(url.parse(surl));
console.log('Ready to Request:');
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