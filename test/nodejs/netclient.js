var net = require('net');
var options = {
	port: 8123,
	host: '192.168.102.75'
};
var client = net.connect(options, function() {
	client.write([
		'GET / HTTP/1.1',
		'User-Agent:curl/7.26.0',
		'Host: 192.168.102.75',
		'Accept: */*',
		'',
		''
	].join('\n'));
});
client.on('data', function(data) {
	console.log(data.toString());
	client.end();
});