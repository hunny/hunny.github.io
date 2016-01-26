var http = require('http');
var url = require('url');
var querystring = require('querystring');
testUrl();
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

function testUrl() {
	console.log('[+][-]URL Parse:');
	var surl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
	console.log(url.parse(surl));
	console.log('[+][-]URL Parse With Parameter True:');
	surl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
	console.log(url.parse(surl, true));
	console.log('[+][-]URL Parse With Parameter True and True:');
	surl = '//user:pass@host.com:8080/p/a/t/h?query=string#hash';
	console.log(url.parse(surl, true, true));
	console.log('[+][-]URL Format:');
	var furl = url.format({
		protocol: 'http',
		host: 'www.example.com',
		pathname: '/p/a/h',
		search: 'query=string'
	});
	console.log(furl);
	console.log('[+][-]URL Resolve:');
	var rurl = url.resolve('http://www.example.com/foo/bar', '../baz');
	console.log(rurl);
	console.log('[+][-] QueryString:');
	// returns
	//{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
	console.log("querystring.parse('foo=bar&baz=qux&baz=quux&corge')");
	console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'));

	// returns
	// 'foo=bar&baz=qux&baz=quux&corge='
	console.log("querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })");
	console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
	
	// returns
	// 'foo:bar;baz:qux'
	console.log("querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')");
	console.log(querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':'));

}