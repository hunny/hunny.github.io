var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(bin[0]);
var str = bin.toString('utf-8');
console.log(str);
var strtobin = new Buffer('hello', 'utf-8');
console.log(bin[0]);
var dup = new Buffer(strtobin.length);
strtobin.copy(dup);
console.log(strtobin);
console.log(dup);