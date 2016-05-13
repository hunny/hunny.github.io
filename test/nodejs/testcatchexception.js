process.on('uncaughtException', function (err) {
    console.log('Catch My Error: %s', err.message);
});

setTimeout(function (fn) {
    fn();
});
