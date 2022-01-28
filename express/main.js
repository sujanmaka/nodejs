const express = require('express');
const app = express();
const wiki = require('./wiki');

app.use('/wiki', wiki);

// app.get('/', function(req, res) {
//     res.send('Hello World!')
// });


app.get((req, res, next) => {
    console.log('This is always run');
    next();
});
app.get('/add-product', (req, res, next) => {
    console.log('In sujan the middleware!');
    res.write('<h1>The "Add Product" Page</h1>');
    next();
});
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.write('<h1>Hello from Express</h1>');
    res.end();
});

app.listen(8000);