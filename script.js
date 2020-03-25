var set1 = ["If Logx (1 / 8) = - 3 / 2, then x is equal to ____.","10","-4","4","1/4", "3"];
var set2 = ["Simplify: (4 – 5) – (13 – 18 + 2).", "1","2","-1","-2", "2"];
var set3 = ["Factor: 5x2 – 15x – 20.","5(x-4)(x+1)","-2(x-4)(x+5)","-5(x+4)(x-1)","5(x+4)(x+1)", "1"];
var set4 = ["Rice weighing 3.75 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each?","9 ounces","24 ounces","18 ounces","15 ounces", "4"];
var set5 = ["What is the radius of a circle that has a circumference of 3.14 meters?","4 meters","0.5 meters","3.14 meters","0.25 meters", "2"];
var questions = [set1,set2,set3,set4,set5];
var startButton = document.querySelector("#start");
var scoresButton = document.querySelector("#scores");
var timeLeft = document.querySelector("#time");
var contentBox = document.querySelector(".card-body");
var scoreArea = document.querySelector(".scoreArea");

var totalSeconds = 60;
var numQuestion = 0;
var selected = false;
var score = 0;
var gameOver = false;

function startGame() {
    event.preventDefault();
    startTimer();
    contentBox.style["text-align"] = "left";
    createQuestion();
}

function startTimer() {
    timeLeft.textContent = totalSeconds;
    var timerInterval = setInterval(function() {
        if (!gameOver){
        totalSeconds--;
        timeLeft.textContent = totalSeconds;
        if(totalSeconds <= 0) {
           clearInterval(timerInterval);
           scoreScreen();

        }
    }
    else{
        clearInterval(timerInterval);
    }
      }, 1000);
}

function createQuestion() {
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

function scoreScreen() {
    contentBox.innerHTML = "";
    var header = document.createElement("h2");
    header.textContent = "All Done!";
    contentBox.appendChild(header);

    var dispScore = document.createElement("div");
    dispScore.textContent = "Your final score is: " + totalSeconds;
    dispScore.style.marginBottom = "22px";
    contentBox.appendChild(dispScore);

    var inputInitials = document.createElement("div");
    inputInitials.innerHTML = '<div class="input-group mb-3"><input type="text" class="form-control playerInfo" placeholder="Enter Name" aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-outline-secondary submit" type="button" id="button-addon2">Submit</button></div></div>';
    contentBox.appendChild(inputInitials);

    var inButton = document.querySelector(".submit");
    var input = document.querySelector(".playerInfo");

    inButton.addEventListener("click", function () {
        var initials = input.value.trim();
        scoreText = initials + ": " + totalSeconds;
        var scoreList = [];
        if (localStorage.getItem("scores") == null) {
            scoreList = [scoreText];
        }
        else {
            scoreList = JSON.parse(localStorage.getItem("scores"));
            scoreList.push(scoreText);
        }
        localStorage.setItem("scores", JSON.stringify(scoreList));
        window.location.href = "index2.html";

    });
}

function answerSelected(ans) {
    var text = "";
    if(!selected){
    var divider = document.createElement("p1");
    divider.innerHTML = "<hr/>";
    contentBox.appendChild(divider);

    var info = document.createElement("p1");
    if (ans == questions[numQuestion][5]){
        text = "Correct!";
        info.textContent = text; //+ ans;
        contentBox.appendChild(info);
        var timerInterval = setInterval(function() {
            clearInterval(timerInterval);
            if (totalSeconds>0){
            if (numQuestion > 3){
                scoreScreen();
                gameOver = true;
            }
            else {
                numQuestion++;
                createQuestion();
            }
        }
      }, 1000);
      score+=20;
    }
    else {
        text = "Wrong!"
        document.querySelector(".card").classList.add("wrongShake");
        info.textContent = text; //+ ans;
        contentBox.appendChild(info);
        var timerInterval = setInterval(function(){
            clearInterval(timerInterval);
            if (totalSeconds>0){
            document.querySelector(".card").classList.remove("wrongShake");
            contentBox.removeChild(divider);
            contentBox.removeChild(info);
            selected = false;
            }
        }, 850);
        totalSeconds+= -5;
    }
    }
}

startButton.addEventListener("click", startGame);
scoresButton.addEventListener("click", function(){
    window.location.href = "index2.html";
});