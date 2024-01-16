var startScreenSection = document.getElementById("start-screen");
var questionsSection = document.getElementById("questions");
var endScreenSection = document.getElementById("end-screen");
var feedbackSection = document.getElementById("feedback");

var startButton = document.getElementById("start");
var timerTextSection = document.getElementById("time");

var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");

var submitButton = document.getElementById("submit");
var initialsInputText = document.getElementById("initials");
var finalScoreTextSection = document.getElementById("final-score");

var timer = undefined;
var timeLeft = 0;
var penalty = 0;

var feedbackTimeout = undefined;

var questionNumber = undefined;

var score = 0;

startButton.addEventListener("click", function (event) {
    event.preventDefault()

    startGame();
});

questionChoices.addEventListener("click", function (event) {
    event.preventDefault();

    var element = event.target;

    if (element.matches("button")) {
        var answer = element.getAttribute("data-answer");

        answerQuestion(answer);
    }
});

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = initialsInputText.value;

    if (initials.length === 0 || initials.length > 3) {
        alert("Initials must be between 1-3 characters long.");
        return;
    }

    saveHighScore(score, initials);

    giveFeedback("High Score Saved");

    hideSection(endScreenSection);
    showSection(startScreenSection);
})

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
    timeLeft = 60;

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

    hideSection(questionsSection);
    hideSection(feedbackSection);
    showSection(endScreenSection);

    finalScoreTextSection.textContent = score;
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

    questionChoices.innerHTML = "";
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
        ++score;
        giveFeedback("Correct");
    } else {
        ++penalty;
        giveFeedback(`Wrong! Correct answer was ${correctAnswer}.`);
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

function giveFeedback(message) {
    feedbackSection.textContent = message;
    showSection(feedbackSection);

    clearTimeout(feedbackTimeout);

    feedbackTimeout = setTimeout(function () {
        hideSection(feedbackSection);
    }, 1000);
}

function saveHighScore(score, initials) {
    var highScores = getHighScores();

    highScores.push({
        initials: initials,
        score: score
    });

    highScores.sort(function (x, y) {
        if (x.score > y.score) {
            return -1;
        } else if (x.score === y.score) {
            if (x.initials < y.initials) {
                return -1;
            } else if (x.initials === y.initials) {
                return 0;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    });

    localStorage.setItem("high-scores", JSON.stringify(highScores));
}

function getHighScores() {
    var highScores = JSON.parse(localStorage.getItem("high-scores"));

    if (highScores === null) {
        return [];
    }

    console.log(highScores);

    return highScores;
}