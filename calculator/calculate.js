exports.operation = function(req, res) {
    var operation = req.body.operation;
    let firstNum = parseInt(req.body.first);
    let secondNum = parseInt(req.body.second);

    var result;

    console.log(operation);
    switch (operation) {
        case "add":
            result = firstNum + secondNum;
            break;
        case "subtract":
            result = firstNum - secondNum;
            break;
        case "multiply":
            result = firstNum * secondNum;
            break;
        case "divide":
            result = firstNum / secondNum;
            break;
        default:
            break;

    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator Web Site</title>
    </head>
    <body>
    <p>The Answer is: ${String(result)}</p>
    <a href="/">Another Calculation</a>
    </body>
    </html> `);
    return res.end();
};