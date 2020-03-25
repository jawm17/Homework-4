var startButton = document.querySelector("#start");
var scoreArea = document.querySelector(".area");
var clearButton = document.querySelector("#clear");
function startGame(){
    window.location.href = "index.html"; 
}


function renderScores(){
    if(localStorage.getItem("scores") == null){
        scoreArea.innerHTML = "";
    }
    else{
    var scores = JSON.parse(localStorage.getItem("scores"));
    // console.log(scoreList);
    for (var i=0; i<scores.length; i++){
        
        var score = document.createElement("p1");
        score.textContent = scores[i];
        scoreArea.appendChild(score); 

        var divider = document.createElement("p1");
        divider.innerHTML = "<hr/>";
        scoreArea.appendChild(divider);
    }
}
}

function clearScores(){
    localStorage.removeItem("scores");
    renderScores();
}

renderScores();

clearButton.addEventListener("click", clearScores);
startButton.addEventListener("click", startGame);