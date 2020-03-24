var set1 = ["Commonly used data types DO NOT include: ","1. Strings","2. Booleans","3. Alerts","4. Numbers", "3"];
var set2 = ["The condition in an if/else statement is enclosed within _____.", "1. quotes","2. curly brackets","3. parentheses","4. square brackets", "3"];
var set3 = ["Arrays in JavaSript can be used to store _____.","1. numbers and strings","2. other arrays","3. booleans","4. all of the above", "4"];
var set4 = ["String values must be enclosed within _____ when being assigned to variables.","1. commas","2. curly brackets","3. quotes","4. parentheses", "3"];
var set5 = ["A very useful tool used for printing content to the debugger is:","1. JavaScript","2. terminal/bash","3. for loops","4. console.log", "4"];
var questions = [set1,set2,set3,set4,set5];
var startButton = document.querySelector("#start");
var timeLeft = document.querySelector("#time");
var contentBox = document.querySelector(".card-body")

var totalSeconds = 35;
var numQuestion = 0;
var selected = false;
var score = 100;

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
        if(totalSeconds === 0) {
           clearInterval(timerInterval);

        }
      }, 1000);
}

function createQuestion() {
    document.querySelector(".card").classList.remove("wrongShake");
    contentBox.innerHTML = "";
    selected = false;

    var question = document.createElement("h3");
    question.className = "question";
    question.textContent = questions[numQuestion][0];
    contentBox.appendChild(question);

    for (var i=1; i<5; i++){
        var button = document.createElement("button");
        button.className = "btn btn-warning btn-sm answer "+ i;
        button.textContent = questions[numQuestion][i]
        contentBox.appendChild(button);
        button.addEventListener("click", function(){
            answerSelected(event.target.classList[event.target.classList.length-1]);
            selected = true;
          });
    }
}

function recordScore() {
    contentBox.innerHTML = "";
    var header = document.createElement("h2");
    header.textContent = "All done!";
    contentBox.appendChild(header);

    var dispScore = document.createElement("p1");
    dispScore.textContent = "Your Score: " + score;
    contentBox.appendChild(dispScore);
}

function answerSelected(ans) {
    if (numQuestion < 4 && !selected){
        selected = false;
        displayResult(ans);
        var timerInterval = setInterval(function() {
                clearInterval(timerInterval);
                numQuestion++;
                createQuestion();
          }, 1500);
    }
    else if (!selected){
        selected = false;
        displayResult(ans);
        var timerInterval = setInterval(function() {
            clearInterval(timerInterval);
            recordScore();
      }, 1500);
    }
}

function displayResult(ans){
    var text = "";
    console.log(ans);
    if (ans == questions[numQuestion][5]){
        text = "Correct!";
    }
    else {
        document.querySelector(".card").classList.add("wrongShake");
        text = "Wrong!"
        score+= -20;
    }
    console.log(score);

    var divider = document.createElement("p1");
    divider.innerHTML = "<hr/>";
    contentBox.appendChild(divider);

    var info = document.createElement("p1");
    info.textContent = text; //+ ans;
    contentBox.appendChild(info);
}

startButton.addEventListener("click", startGame);