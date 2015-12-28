var fs = require('fs');
function readByName(name) {
	var rs = fs.createReadStream(name);
	rs.on('data', function(chunk) {
		console.log('data event.');
	});
	rs.on('end', function() {
		console.log('read end.');
	});
}
function main(argv) {
	console.log(argv);
	if (argv.length != 1) {
		console.log('File path arguments: src');
		return;
	}
	readByName(argv[0]);
}
main(process.argv.slice(2));