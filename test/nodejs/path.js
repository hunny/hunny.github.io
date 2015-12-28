var path = require('path');
console.log(path.normalize('foo//baz//../bar/'));
console.log(path.normalize('foo//baz//../bar/').replace(/\\/g, '/'));
console.log(path.join('foo/', 'baz/', '../bar'));
console.log(path.extname('foo/bar.js'));