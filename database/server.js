var express = require('express');
var app = express();
app.get('/', function(req, res) {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 's9808075859',
        database: 'sujan'
    })

    connection.connect();

    connection.query('SELECT * from Persons', function(err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0])
    })

    connection.end();
    res.end();

});

var server = app.listen(8080, function() { // start the server
    console.log('Server is running..');
});