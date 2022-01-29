var express = require("express");
var app = express();
var fs = require('fs');


app.set("view engine", "jade");

// fs.readFile('mynewfile1.txt', function(err, data) {
//     console.log(data.toJSON());
//     // res.writeHead(200, { 'Content-Type': 'text/html' });
//     // res.write(data.toString());
//     // return res.end();
// });

// app.get("/", function(req, res) {
//     // res.render("test.pug", { data: 'hami ystai ta ho ni bro' });


// }).listen(8080);

// fs.appendFile('mynewfile1.txt', 'Hello mug!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.writeFile('mynewfile.txt', 'Replace everything', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

fs.unlink('mynewfile.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});