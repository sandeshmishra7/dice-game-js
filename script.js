let rollBtn = document.querySelector('button');
let currentScore1 = document.querySelector('.currentScorep1');
let totalScore1 = document.querySelector('.totalScorep1');
let currentScore2 = document.querySelector('.currentScorep2');
let totalScore2 = document.querySelector('.totalScorep2');
let results = document.querySelector('.results');

var cscore1 = 0;
var cscore2 = 0;

var tscore1 = 0;
var tscore2 = 0;

function rollDice() {
    return Math.floor((Math.random() * 6) + 1);
}

function totalScore() {
    var rollresult1 = rollDice();
    var rollresult2 = rollDice();

    cscore1 = rollresult1;
    currentScore1.innerHTML = cscore1;

    cscore2 = rollresult2;
    currentScore2.innerHTML = cscore2;

    tscore1 += cscore1
    totalScore1.innerHTML = tscore1;

    tscore2 += cscore2
    totalScore2.innerHTML = tscore2;
}

rollBtn.addEventListener('click', function () {
    totalScore();

    if (totalScore1.innerHTML >= 20) {
        results.innerHTML = `Player 1 won`;
        rollBtn.style.visibility = 'hidden';
    }
    else if (totalScore2.innerHTML >= 20) {
        results.innerHTML = `Player 2 won`;
        rollBtn.style.visibility = 'hidden';
    }

})