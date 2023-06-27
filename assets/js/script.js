
const homePage = document.getElementById('start-home');
const formEl = document.querySelector('#user-input-form');
const userListEl = document.querySelector('#user-list');
const startQuizBtn = document.getElementById('start-btn');
const quizQuestionBtns = document.querySelectorAll('.quiz-btn');
const timerEl = document.getElementById('timer');
const nextQuestionBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score-card');

// const correctAnswerBtns = document.querySelectorAll('.correct');
let timerCount = 60;
let score;

let currentQuestion;


let time;


// Display 60 seconds on the clock on load
timerEl.textContent = timerCount;
scoreEl.textContent = score;


function quizEnd() {
    clearInterval(time);
}

function startTimer() {
    timerCount--;
    console.log(timerCount);
    timerEl.textContent = timerCount;
    if (timerCount <= 0) {
        quizEnd();
        console.log('Your time is up!');
    };
};

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = score;
    // Start timer
    time = setInterval(startTimer, 1000);

    homePage.hidden = true;
    document.getElementById('quiz-wrapper').hidden = false;
    document.getElementById('q1').hidden = false;
    renderQuestion();
}

function renderQuestion() {
    nextQuestionBtn.hidden = true;
    currentQuestion++;

    if (currentQuestion == 1) {
        document.getElementById('q1').hidden = true;
        document.getElementById('q2').hidden = false;
    }
    if (currentQuestion == 2) {
        document.getElementById('q2').hidden = true;
        document.getElementById('q3').hidden = false;
    }
    if (currentQuestion == 3) {
        document.getElementById('q3').hidden = true;
        document.getElementById('q4').hidden = false;
    }
    console.log('render question index?????');
    console.log(currentQuestion);
    multipleChoiceHandler();
};

function multipleChoiceHandler(event) {
    if (event.target.matches('.correct')) {
        score += 5;
        console.log(`SCOOORRREEE`, score);
        scoreEl.textContent = score;
    } else {
        console.log('DUMBDUMB');
        timerCount = timerCount - 5;
    }
    enableNextButton();
};


function enableNextButton() {
    if (currentQuestion < 3 && timerCount > 0) {
        nextQuestionBtn.hidden = false;

        nextQuestionBtn.addEventListener('click', renderQuestion);

    } else if (timerCount == 0) {
        let endQuizBtn = document.createElement('button');
        endQuizBtn.textContent = 'Submit Quiz';
        document.getElementById('if-btn').appendChild(endQuizBtn);
    }
    endQuizBtn.addEventListener('click', () => {
        document.getElementById('q4').hidden = true;
        document.getElementById('store-user').hidden = false;
        userInputHandler();
    })
};
    


function userInputHandler(event) {
    event.preventDefault();
    console.log(event);

    let userNameInput = document.querySelector("input[name='user']").value;
    console.dir(userNameInput);

    // form input validation
    if (!userNameInput) {
        alert("You must include your initials!");
        return false;
    }
    formEl.reset();

    let userScoreRecord = document.querySelector('#scoreboard').value;
    console.log(`SCORRREEE`, score);

    // package up as data object
    let userDataObj = {
        name: userNameInput,
        score: userScoreRecord
    }
    // send as argument to userRecordEl
    localStorage.setItem('userDataObj', JSON.stringify(userDataObj));
    userRecordEl(userDataObj);
};



function userRecordEl(userDataObj) {
    localStorage.getItem('userDataObj', JSON.parse(userDataObj));
    // create user to 'Score Board'
    let userScoreEl = document.createElement("li");
    userScoreEl.className = "user-score";

    // create div to hold score
    let scoreEl = document.createElement('div');
    scoreEl.className = "score";
    // add score to html
    scoreEl.innerHTML = "<h4 id='user-input' style='strong'>" + userDataObj.name + "</h4><span class='score'>" + userDataObj.score + "</span>";

    userScoreEl.appendChild(scoreEl);

    // add user & score <li> to entire list
    userListEl.appendChild(userScoreEl);

}

// function endQuiz() {

// }



startQuizBtn.addEventListener('click', startQuiz);

quizQuestionBtns.forEach(function (button) {
    button.addEventListener('click', (event) => {
        multipleChoiceHandler(event);
    });
});


formEl.addEventListener('submit', userInputHandler);







