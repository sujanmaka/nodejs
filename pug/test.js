var http = require('http');

var fs = require('fs');


http.createServer(function(req, res) {
    fs.unlink('views/test.pug', function(err) {
        if (err) throw err;
        console.log('File deleted!');
        res.end();
    });
}).listen(8080);