const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const calculate = require("./calculate.js");

app.use(bodyParser.urlencoded({ extended: true }))
    // server css as static
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    calculate.operation(req, res);
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});