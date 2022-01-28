var express = require('express');
var app = express();
app.get('/', function(req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost',
        database: 'SchoolDB',
        port: 8090,
        options: { trustServerCertificate: true }
    };

    sql.connect(config, function(err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();

        request.query('select * from Student', function(err, recordset) {
            if (err) console.log(err)
                // send records as a response
            res.send(recordset);
        });
    });

});

var server = app.listen(5000, function() { // start the server
    console.log('Server is running..');
});