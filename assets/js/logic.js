var startScreenSection = document.getElementById("start-screen");
var questionsSection = document.getElementById("questions");
var endScreenSection = document.getElementById("end-screen");
var feedbackSection = document.getElementById("feedback");

var startButton = document.getElementById("start");
var timerTextSection = document.getElementById("time");

var timer = undefined;
var timeLeft = 0;
var penalty = false;

startButton.addEventListener("click", function () {
    startGame();
});

function startGame() {
    hideSection(startScreenSection);
    showSection(questionsSection);

    startTimer();
}

function hideSection(section) {
    section.classList.add("hide");
}

function showSection(section) {
    section.classList.remove("hide");
}

function startTimer() {
    timeLeft = 10;

    timerTextSection.textContent = timeLeft;

    timer = setInterval(function () {
        if (penalty) {
            timeLeft = timeLeft - 10;
            penalty = false;
        }

        timeLeft = Math.max(timeLeft - 1, 0);

        if (timeLeft === 0) {
            endGame();
        }

        timerTextSection.textContent = timeLeft;
    }, 1000);
}

function endGame() {
    clearInterval(timer);
}