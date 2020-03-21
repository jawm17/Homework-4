var question1 = {question: "Commonly used data types DO NOT include: ", answer1: "strings"};
var startButton = document.querySelector("#start");
var timeLeft = document.querySelector("#time");
var contentBox = document.querySelector(".content")

var totalSeconds = 75;

function startGame() {
    event.preventDefault();
    startTimer();
    contentBox.innerHTML = "";
    contentBox.style["text-align"] = "left";
    createQuestion();
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

function createQuestion() {
   var question = document.createElement("h3");
   question.textContent = question1.question;
   contentBox.appendChild(question);

//    for (var i = 0; i<)
//    var removeBttn = document.createElement("BUTTON");
//    removeBttn.title="Entfernen";
//    removeBttn.innerHTML='<i class="fa fa-trash-o"></i>'
//    var style = document.createElement('style');
//    style.type = 'text/css';
//    style.innerHTML = '.removeBttnClass  { position: absolute; top:91%;'
//    +'left: 22.7%transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);'
//    +'background-color: white;cursor: pointer;border-radius: 5px;color: black;'
//    +'text-align: center;border-color: lightgray;height: 50px ! important;'
//    +'width: 53px;border-radius: 4px;padding: 10x 17px;border-width: thin}';
//    document.head.appendChild(style);
//    removeBttn.className="removeBttnClass";

//    document.getElementById("removeBttnFrame").appendChild(removeBttn);

}

startButton.addEventListener("click", startGame);