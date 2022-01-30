var nums = {
    "1,1,2,3,5": 8,
    "1,4,9,16,25": 36,
    "2,3,5,7,11": 13,
    "1,2,4,8,16": 32,
    "1,8,27,64,125": 216
};

var keys = Object.keys(nums);
var sequence = keys[0];
``

function checkAnswer(req, res) {
    var isComplete = false;

    if (req.body.answer == nums[keys[req.body.count]]) {
        req.body.score = parseInt(req.body.score) + 1;
    }
    if (parseInt(req.body.count) + 1 == 5) {
        isComplete = true;
    } else {
        sequence = keys[req.body.count];
    }
    res.render("quiz.pug", {
        score: req.body.score,
        sequence: keys[parseInt(req.body.count) + 1],
        isComplete: isComplete,
        count: parseInt(req.body.count) + 1
    });
}


module.exports = {
    sequence,
    checkAnswer
}