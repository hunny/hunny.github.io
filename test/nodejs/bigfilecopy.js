var fs = require('fs');
function copy(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv) {
	if (argv.length != 2) {
		console.log('Tow arguments: src, dest');
		return;
	}
	console.log(argv);
	copy(argv[0], argv[1]);
}
main(process.argv.slice(2));