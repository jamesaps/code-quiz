// initialise variables to store necessary page elements

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

// create audio objects for playing 

var correctAnswerAudio = new Audio('./assets/sfx/correct.wav');
var incorrectAnswerAudio = new Audio('./assets/sfx/incorrect.wav');

// set up global variables for application state

var timer = undefined;
var timeLeft = 0;
var penalty = 0;

var feedbackTimeout = undefined;
var incorrectAnswerTimeout = undefined;

var questionNumber = undefined;

var score = 0;

// respond to clicks on start button to begin game, prevent default element behaviour

startButton.addEventListener("click", function (event) {
    event.preventDefault()

    startGame();
});

// respond to clicks on choices container

questionChoices.addEventListener("click", function (event) {
    event.preventDefault();

    var element = event.target;

    // perform checks on clicks that occurred on child element (button) of the choices container

    if (element.matches("button")) {
        var answer = element.getAttribute("data-answer");

        answerQuestion(answer);
    }
});

// respond to submit button click

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = initialsInputText.value;

    // validate user input

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

    // reset quiz state

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
    timeLeft = 60; // 60 second timer

    renderTimer();

    timer = setInterval(function () {
        if (penalty > 0) {
            // apply all accummulated penalties at once (unlikely this exceeds 1 but if a user clicks very fast it might)
            timeLeft = timeLeft - (10 * penalty);
            penalty = 0; // reset penalties applied
        }

        // ensure timeLeft never goes lower than 0 even if penalties would take them below
        timeLeft = Math.max(timeLeft - 0.1, 0); // timer refreshes every 100ms so we deduct 1/10th of a second on each tick

        if (timeLeft === 0) {
            endGame(); // when timeLeft reaches 0 trigger end game actions
        }

        renderTimer()
    }, 100); // update timer every 100ms
}

function endGame() {
    // reset active timer 
    clearInterval(timer);
    timeLeft = 0;

    renderTimer();

    hideSection(questionsSection);
    hideSection(feedbackSection);
    showSection(endScreenSection);

    finalScoreTextSection.textContent = score;
}

// shuffle an array in place
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

    questionChoices.innerHTML = ""; // empty question choices container
    questionTitle.textContent = question.question; // update question title

    for (var i = 0; i < question.options.length; ++i) {
        var button = document.createElement("button");

        button.textContent = `${i + 1}. ${question.options[i]}`;
        button.setAttribute("data-answer", question.options[i]);

        questionChoices.appendChild(button); // add button to container
    }
}

function answerQuestion(answer) {
    var correctAnswer = questions[questionNumber].answer;

    if (answer === correctAnswer) {
        ++score;
        giveFeedback("Correct");
        correctAnswerAudio.play();
    } else {
        ++penalty;
        giveFeedback(`Wrong! Correct answer was ${correctAnswer}.`);
        incorrectAnswerAudio.play();

        timerTextSection.style.color = 'red';

        // ensure new timeout overrides and does not coexist alongside previous 
        clearTimeout(incorrectAnswerTimeout);

        // flash timer text red to indicate penalty was applied
        incorrectAnswerTimeout = setTimeout(function () {
            timerTextSection.style.removeProperty('color');
        }, 300);
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
    timerTextSection.textContent = Math.ceil(timeLeft);
}

function giveFeedback(message) {
    feedbackSection.textContent = message;
    showSection(feedbackSection);

    // if feedback is due to disappear from a previous feedback instance, it is cleared to ensure conflicting timeouts are triggering in seemingly unpredictable ways
    clearTimeout(feedbackTimeout);

    // make feedback disappear after some time
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

    // sort by highest score first and then initials alphabetically second
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
    // if high-scores key does not exist in local storage, null is returned which propagates through JSON.parse
    var highScores = JSON.parse(localStorage.getItem("high-scores"));

    if (highScores === null) {
        return [];
    }

    console.log(highScores);

    return highScores;
}