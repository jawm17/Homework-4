var set1 = ["Commonly used data types DO NOT include: ","1. Strings","2. Booleans","3. Alerts","4. Numbers"];
var set2 = ["The condition in an if/else statement is enclosed within _____.", "1. quotes","2. curly brackets","3. parentheses","4. square brackets"];
var set3 = ["Arrays in JavaSript can be used to store _____.","1. numbers and strings","2. other arrays","3. booleans","4. all of the above"];
var set4 = ["String values must be enclosed within _____ when being assigned to variables.","1. commas","2. curly brackets","3. quotes","4. parentheses"];
var set5 = ["A very useful tool used for printing content to the debugger is:","1. JavaScript","2. terminal/bash","3. for loops","4. console.log"];
var questions = [set1,set2,set3,set4,set5];
var startButton = document.querySelector("#start");
var timeLeft = document.querySelector("#time");
var contentBox = document.querySelector(".content")

var totalSeconds = 75;
var numQuestion = 0;

function startGame() {
    event.preventDefault();
    startTimer();
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
    contentBox.innerHTML = "";

    var question = document.createElement("h3");
    question.className = "question";
    question.textContent = questions[numQuestion][0];
    contentBox.appendChild(question);

    var button = document.createElement("button");
    button.className = "btn btn-warning btn-sm answer 1";
    button.textContent = questions[numQuestion][1]
    contentBox.appendChild(button);
    button.addEventListener("click", function(){
        answerSelected(1);
      });

    var button2 = document.createElement("button");
    button2.className = "btn btn-warning btn-sm answer 2";
    button2.textContent = questions[numQuestion][2];
    contentBox.appendChild(button2);
    button2.addEventListener("click", function(){
        answerSelected(2);
      });

    var button3 = document.createElement("button");
    button3.className = "btn btn-warning btn-sm answer 3";
    button3.textContent = questions[numQuestion][3];
    contentBox.appendChild(button3);
    button3.addEventListener("click", function(){
        answerSelected(3);
      });

    var button4 = document.createElement("button");
    button4.className = "btn btn-warning btn-sm answer 4";
    button4.textContent = questions[numQuestion][4];
    contentBox.appendChild(button4);
    button4.addEventListener("click", function(){
        answerSelected(4);
      });

}

function recordScore() {
    contentBox.innerHTML = "";
    var header = document.createElement("h2");
    header.textContent = "All done!";
    contentBox.appendChild(header);
}

function answerSelected(ans) {
    if (numQuestion < 4){
        var info = document.createElement("p1");
        info.textContent = "You chose answer " + ans;
        contentBox.appendChild(info);

        var timerInterval = setInterval(function() {
                clearInterval(timerInterval);
                numQuestion++;
                createQuestion();
          }, 1500);
    }
    else {
        var info = document.createElement("p1");
        info.textContent = "You chose answer " + ans;
        contentBox.appendChild(info);
        
        var timerInterval = setInterval(function() {
            clearInterval(timerInterval);
            recordScore();
      }, 1500);
    }
}

startButton.addEventListener("click", startGame);