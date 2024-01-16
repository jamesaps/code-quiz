var highScores = [];
var highScoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function (event) {
    event.preventDefault();

    clearHighScores();
});

renderHighScores(); // completed on page load

function renderHighScores() {
    getHighScores();

    highScoresList.innerHTML = ""; // clear high scores container

    for (var i = 0; i < highScores.length; ++i) {
        // create li for high score row
        var li = document.createElement("li");

        var initials = highScores[i].initials;
        var score = highScores[i].score;

        li.textContent = `${initials} - ${score}`; // hypen delimited initials and score

        highScoresList.appendChild(li); // append score to parent container
    }
}

function getHighScores() {
    var highScoresFromLocalStorage = JSON.parse(localStorage.getItem("high-scores"));

    if (highScoresFromLocalStorage !== null) {
        highScores = highScoresFromLocalStorage;
    }
}

function clearHighScores() {
    // convert high scores to an empty array
    localStorage.setItem("high-scores", JSON.stringify([]));

    renderHighScores();
}