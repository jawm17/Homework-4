var startButton = document.querySelector("#start");
var timeLeft = document.querySelector("#time");

var totalSeconds = 75;

function startGame() {
    event.preventDefault();
    startTimer();
}

function startTimer() {
    timeLeft.textContent = totalSeconds;
    var timerInterval = setInterval(function() {
        totalSeconds--;
        timeLeft.textContent = totalSeconds;
        // if(totalSeconds === 0) {
        //   clearInterval(timerInterval);
        // }
      }, 1000);
}


startButton.addEventListener("click", startGame);