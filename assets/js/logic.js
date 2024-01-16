var startScreenSection = document.getElementById("start-screen");
var questionsSection = document.getElementById("questions");
var endScreenSection = document.getElementById("end-screen");
var feedbackSection = document.getElementById("feedback");

var startButton = document.getElementById("start");
var timerTextSection = document.getElementById("time");

var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");

var timer = undefined;
var timeLeft = 0;
var penalty = false;

var questionNumber = undefined;

startButton.addEventListener("click", function () {
    startGame();
});

function startGame() {
    hideSection(startScreenSection);
    showSection(questionsSection);

    shuffle(questions);

    startTimer();

    questionNumber = 0;

    askQuestion();
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

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function askQuestion() {
    var question = questions[questionNumber];

    questionTitle.textContent = question.question;

    for (var i = 0; i < question.options.length; ++i) {
        var button = document.createElement("button");

        button.textContent = `${i + 1}. ${question.options[i]}`;
        button.setAttribute("data-answer", question.options[i]);

        questionChoices.appendChild(button);
    }
}

