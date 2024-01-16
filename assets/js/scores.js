var highScores = [];
var highScoresList = document.getElementById("highscores");

renderHighScores();

function renderHighScores() {
    getHighScores();

    highScoresList.innerHTML = "";

    for (var i = 0; i < highScores.length; ++i) {
        var li = document.createElement("li");

        var initials = highScores[i].initials;
        var score = highScores[i].score;

        li.textContent = `${initials} - ${score}`

        highScoresList.appendChild(li);
    }
}

function getHighScores() {
    var highScoresFromLocalStorage = JSON.parse(localStorage.getItem("high-scores"));

    if (highScoresFromLocalStorage !== null) {
        highScores = highScoresFromLocalStorage;
    }
}