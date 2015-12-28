var fs = require('fs');
function readByName(name) {
	var rs = fs.createReadStream(name);
	rs.on('data', function(chunk) {
		rs.pause();
		console.log('data event.');
		doOther(chunk, function() {
			rs.resume();
		});
	});
	rs.on('end', function() {
		console.log('read end.');
	});
}
function doOther(chunk, callback) {
	console.log('It\'s over.');
	callback();
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

function fileWriteEvent() {
	var rs = fs.createReadStream(src);
	var ws = fs.createWriteStream(dst);

	rs.on('data', function (chunk) {
	    ws.write(chunk);
	});

	rs.on('end', function () {
	    ws.end();
	});
}
function fileReadAndWriteEvent() {
	var rs = fs.createReadStream(src);
	var ws = fs.createWriteStream(dst);

	rs.on('data', function (chunk) {
	    if (ws.write(chunk) === false) {
	        rs.pause();
	    }
	});

	rs.on('end', function () {
	    ws.end();
	});

	ws.on('drain', function () {
	    rs.resume();
	});
}