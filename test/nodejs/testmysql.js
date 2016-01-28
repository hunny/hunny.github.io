var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : '192.168.9.243',
	port     : 3306,
	user     : 'root',
	password : '123456',
	database : 'cubi-life'
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

var sql = "SELECT * FROM ?? WHERE ?? = ?";
var inserts = ['users', 'id', 13];
sql = mysql.format(sql, inserts);
//Insert sql
console.log('Insert sql:' + sql);
//connection.query("UPDATE posts SET title = :title", { title: "Hello MySQL" });
//Custom format
connection.config.queryFormat = function (query, values) {
	if (!values) return query;
	return query.replace(/\:(\w+)/g, function (txt, key) {
		if (values.hasOwnProperty(key)) {
			return this.escape(values[key]);
		}
		return txt;
	}.bind(this));
};

connection.query("UPDATE email_log SET result = :result where id = :id", { result: "Hello MySQL", id: 1}, function(err, result) {
	if (err) throw err;
	console.log('changed ' + result.changedRows + ' rows');
	console.log(result);
});

connection.query('INSERT INTO posts SET ?', {title: 'test'}, function(err, result) {
	if (err) throw err;
	console.log(result.insertId);
});

connection.end();