var http = require('http');
var options = {
	hostname: '192.168.102.75',
	port: 8124,
	path: '/',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};
var request = http.request(options, function(response) {
	console.log('Receive Response.');
});
request.write('Hello Http Request.');
request.end();