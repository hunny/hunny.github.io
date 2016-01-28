var child_process = require('child_process');
var util = require('util');
//$ cp -r %s %s
function copy(source, target, callback) {
    child_process.exec(
        util.format('cp -r %s/* %s', source, target), callback);
}

copy('a', 'b', function (err) {
    // ...
});