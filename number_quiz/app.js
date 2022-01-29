var express = require("express");
var app = express();
var quizService = require("./quizService");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("quiz.pug", { score: quizService.score, sequence: quizService.sequence });
})

app.post("/", function(req, res) {
    quizService.checkAnswer(req, res);
});

app.listen(8080, function() {
    console.log("server running on port ");
})