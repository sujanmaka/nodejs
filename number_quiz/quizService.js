var nums = {
    "1,1,2,3,5": 8,
    "1,4,9,16,25": 36,
    "2,3,5,7,11": 13,
    "1,2,4,8,16": 32,
    "1,8,27,64,125": 216
};

var keys = Object.keys(nums);

var score = 0;
var count = 0;
var sequence = keys[count];
``
var isComplete = false;

function checkAnswer(req, res) {
    if (req.body.answer == nums[sequence]) {
        score++;
    }
    count++;
    if (count == 5) {
        isComplete = true;
    } else {
        sequence = keys[count];
    }
    res.render("quiz.pug", {
        score: score,
        sequence: sequence,
        isComplete: isComplete,
        count: count
    });
}


module.exports = {
    sequence,
    score,
    checkAnswer
}