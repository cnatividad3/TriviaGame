//variables
var questionsRight = 0;
var questionsWrong = 0;

//timer
var sec = 1;
var timer = setInterval(gameTimer, 1000);

function gameTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(timer);
        alert("Time is up!!");
    }
}

//store answers


//display answers