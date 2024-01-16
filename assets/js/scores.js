var highScores = [];
var highScoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function (event) {
    event.preventDefault();

    clearHighScores();
});

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

function clearHighScores() {
    localStorage.setItem("high-scores", JSON.stringify([]));

    renderHighScores();
}