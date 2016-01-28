var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : '192.168.9.243',
	port     : 3306,
	user     : 'root',
	password : '111111',
	database : 'test'
});

connection.connect();

connection.query('SELECT * from email_log', function(err, rows, fields) {
	if (!err) {
		console.log('The solution is: ', rows);
		console.log('The fields is: ', fields);
	} else {
		console.log('Error while performing Query.');
	}
});

connection.end();