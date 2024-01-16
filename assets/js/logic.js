var startScreenSection = document.getElementById("start-screen");
var questionsSection = document.getElementById("questions");
var endScreenSection = document.getElementById("end-screen");
var feedbackSection = document.getElementById("feedback");

var startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
    startGame();
});

function startGame() {
    hideSection(startScreenSection);
    showSection(questionsSection);
}

function hideSection(section) {
    section.classList.add("hide");
}

function showSection(section) {
    section.classList.remove("hide");
}