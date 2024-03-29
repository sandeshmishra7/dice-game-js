let rollBtn = document.querySelector('button');
let currentScore1 = document.querySelector('.currentScorep1');
let totalScore1 = document.querySelector('.totalScorep1');
let currentScore2 = document.querySelector('.currentScorep2');
let totalScore2 = document.querySelector('.totalScorep2');
let results = document.querySelector('.results');

let tscore1 = 0;
let tscore2 = 0;
let turn = true;

function rollDice() {
    return Math.floor((Math.random() * 6) + 1);
}

function totalScore() {
    // currentScore1.innerHTML = rollDice();
    // currentScore2.innerHTML = rollDice();

    // tscore1 += Number(currentScore1.innerHTML)
    // totalScore1.innerHTML = tscore1;

    // tscore2 += Number(currentScore2.innerHTML)
    // totalScore2.innerHTML = tscore2;

    if (turn) {
        currentScore1.innerHTML = rollDice();
        tscore1 += Number(currentScore1.innerHTML)
        totalScore1.innerHTML = tscore1;
        turn = false;
    }
    else {
        currentScore2.innerHTML = rollDice();
        tscore2 += Number(currentScore2.innerHTML)
        totalScore2.innerHTML = tscore2;
        turn = true;
    }
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