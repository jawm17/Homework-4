var highscores = ["MS-74","AE-70"];
var startButton = document.querySelector("#start");
var scoreArea = document.querySelector(".area");

function startGame(){
    window.location.href = "index.html"; 
}


function renderScores(){
    for (var i=0; i<highscores.length; i++){
        var score = document.createElement("p1");
        score.textContent = highscores[i];
        scoreArea.appendChild(score);

        var divider = document.createElement("p1");
        divider.innerHTML = "<hr/>";
        scoreArea.appendChild(divider);
    }
    var playerScore = localStorage.getItem("score").toUpperCase();
    console.log(playerScore);
    var score = document.createElement("p1");
    score.textContent = playerScore;
    scoreArea.appendChild(score);

    var divider = document.createElement("p1");
    divider.innerHTML = "<hr/>";
    scoreArea.appendChild(divider);
}

renderScores();

startButton.addEventListener("click", startGame);