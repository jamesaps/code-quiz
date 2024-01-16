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
var penalty = 0;

var questionNumber = undefined;

var score = 0;

startButton.addEventListener("click", function () {
    startGame();
});

questionChoices.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button")) {
        var answer = element.getAttribute("data-answer");

        answerQuestion(answer);
    }
});

function startGame() {
    hideSection(startScreenSection);
    showSection(questionsSection);

    shuffle(questions);

    startTimer();

    score = 0;
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

    renderTimer();

    timer = setInterval(function () {
        if (penalty > 0) {
            timeLeft = timeLeft - (10 * penalty);
            penalty = 0;
        }

        timeLeft = Math.max(timeLeft - 1, 0);

        if (timeLeft === 0) {
            endGame();
        }

        renderTimer()
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    timeLeft = 0;

    renderTimer();
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

function answerQuestion(answer) {
    var correctAnswer = questions[questionNumber].answer;

    if (answer === correctAnswer) {

    } else {

    }

    nextQuestion();
}

function nextQuestion() {
    if (++questionNumber === questions.length) {
        // All questions have been exhausted
        endGame();
        return;
    }

    askQuestion();
}

function renderTimer() {
    timerTextSection.textContent = timeLeft;
}