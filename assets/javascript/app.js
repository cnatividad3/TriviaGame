
//variables
var questionsRight = 0;
var questionsWrong = 0;

//timer
var sec = 15;
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
var firstQuestion = document.getElementsByName('question1');

for (var i = 0; i < firstQuestion.length; i++)
{
 if (firstQuestion[i].checked)
 {
  //??? 
firstQuestion[i].value

  
  break;
 }
}



//display answer count