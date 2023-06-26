

// // let quizContent = [
// //     {//question 1: quizContent[0]
// //         question: "If javaScript was an icecream, what flavor would it be?",
// //         choices: [
// //             "coffee",
// //             "rockyRoad",
// //             "vanilla",
// //             "allTheAbove"],
// //         answer:"allTheAbove"
// //     },
// //     {//question 2: quizContent[1]
// //         question: "What does DOM stand for?",
// //         choices: [
// //             "departmentOfMondays",
// //             "dressingOddMonkeys",
// //             "documentObjectModel",
// //             "defendOurMemories"],
// //         answer:"documentObjectModel"
// //     },
// //     {//question 3: quizContent[2]
// //         question: "What purpose does JavaScript have on a browser's content?",
// //         choices: [
// //             "makesItPretty",
// //             "allowsAnInteractiveExperience",
// //             "disablesAllFunctionality", "deliversHotCoffeeToYourDeskForFocusedWebSurfing"],
// //         answer:"allowsAnInteractiveExperience"
// //     },
// //     {//question 4: quizContent[3]
// //         question: "Which of these is NOT a <button> type?",
// //         choices: [
// //             "reset",
// //             "zipper",
// //             "button",
// //             "submit"],
// //         answer:"zipper"
// //     }];



// const startButton = document.getElementById('start-btn');
// let optionA = document.getElementById("clickA");
// let optionB = document.getElementById("clickB");
// let optionC = document.getElementById("clickC");
// let optionD = document.getElementById("clickD");

// let position = 0;
// let points = 0;
// let timerEl = document.getElementById('timer-count');
// let time = 45;
// let interval;
// timerEl.textContent = time;
// const userContainer = document.getElementById('store-user');
// let userInput = document.getElementById('user-input');
// let submitBtn = document.getElementById('submit-btn');
// let highScores = localStorage.getItem("highscores") || [];
// // const nextQuestion = document.getElementById('next-btn');
// // let scoreBoard = document.getElementById('#scoreboard')
// // const resetBtn = document.getElementById('#clear-scores-btn');
// // const backToStartBtn = document.getElementById('#start-over-btn');
// function nextPlease() {
//     document.querySelector("#current-question").innerText = quizContent[position].question,
//         document.querySelector("#clickA").innerText = quizContent[position].choices[0],
//         document.querySelector("#clickB").innerText = quizContent[position].choices[1],
//         document.querySelector("#clickC").innerText = quizContent[position].choices[2],
//         document.querySelector("#clickD").innerText = quizContent[position].choices[3];

//     position++
// };


// function hideStart() {
//     document.getElementById('start-home').style.display = "none";
//     console.log("the page refreshed!");
// };

// function startGame() {
//     document.getElementById('quiz').style.display = "block";
//     interval = setInterval(function () {
//         timerCount = time--,
//             timerEl.textContent = time
//     }, 1000);
//     hideStart();
//     nextPlease();
//     console.log('bon qui qui');
// };


// function submitName() {

//     let username = document.getElementById("user-input").value;
//     // let scoreEntry = {
//     //     name: username,
//     //     score: points,
//     //     timeLeft: time
//     // }
//     // scoreEntry.push(highScores)

// };

// const userChoice = ("click", function (event) {
//     console.log('made it to userChoice');
//     // console.log(event.target.textContent);
//     if (event.target.textContent === quizContent[position].answer) {
//         console.log('is it a string or nah');
//         points += 3;
//     } else {
//         time = (time - 10);

//     };

//     if (position < quizContent.length) {
//         nextPlease();
//     } else {
//         // const element = array[index];
//         userContainer.style.display = 'block';
//         document.getElementById('quiz').style.display = "none";
//         clearInterval(interval);
//     };

// });

// startButton.addEventListener("click", startGame);

// optionA.addEventListener("click", userChoice);
// // function choiceAnswer(event) {

// // }

// optionB.addEventListener("click", userChoice);
// // function choiceAnswer(event) {

// // }
// optionC.addEventListener("click", userChoice);
// // function choiceAnswer(event) {

// // }
// optionD.addEventListener("click", userChoice);
// // }





// // function init() {
// //   getWins();
// //   getlosses();
// // }

// // // The startGame function is called when the start button is clicked
// // function startGame() {
// //   isWin = false;
// //   timerCount = 10;


// // // The loseGame function is called when timer reaches 0
// // function loseGame() {
// //   wordBlank.textContent = "GAME OVER";
// //   loseCounter++
// //   startButton.disabled = false;
// //   setLosses()
// // }


// // function setWins() {
// //   win.textContent = winCounter;
// //   localStorage.setItem("winCount", winCounter);
// // }

// // // Updates lose count on screen and sets lose count to client storage
// // function setLosses() {
// //   lose.textContent = loseCounter;
// //   localStorage.setItem("loseCount", loseCounter);
// // }

// // // These functions are used by init
// // function getWins() {
// //   // Get stored value from client storage, if it exists
// //   var storedWins = localStorage.getItem("winCount");
// //   // If stored value doesn't exist, set counter to 0
// //   if (storedWins === null) {
// //     winCounter = 0;
// //   } else {
// //     // If a value is retrieved from client storage set the winCounter to that value
// //     winCounter = storedWins;
// //   }
// //   //Render win count to page
// //   win.textContent = winCounter;
// // }

// // function getlosses() {
// //   var storedLosses = localStorage.getItem("loseCount");
// //   if (storedLosses === null) {
// //     loseCounter = 0;
// //   } else {
// //     loseCounter = storedLosses;
// //   }
// //   lose.textContent = loseCounter;
// // }

// // function checkWin() {
// //   // If the word equals the blankLetters array when converted to string, set isWin to true
// //   if (chosenWord === blanksLetters.join("")) {
// //     // This value is used in the timer function to test if win condition is met
// //     isWin = true;
// //   }
// // }



// // function resetGame() {
// //   // Resets win and loss counts
// //   winCounter = 0;
// //   loseCounter = 0;
// //   // Renders win and loss counts and sets them into client storage
// //   setWins()
// //   setLosses()
// // }
// // // Attaches event listener to button
// // resetButton.addEventListener("click", resetGame);
// //
// // document.getElementById("clear-scores").disabled = true;
const formEl = document.querySelector('#user-input-form');
const userListEl = document.querySelector('#user-list');
const correctAnswerBtn = document.querySelector('.correct');
const wrongAnswerBtn = document.querySelector('.multiple-choice');
const quizQuestionBtns = document.querySelectorAll('.quiz-btn');

// ? taskFormHandler
const userInputHandler = function (event) {
    event.preventDefault();
    console.log(event);
    // ? taskNameInput
    let userNameInput = document.querySelector("input[name='user']").value;
    console.dir(userNameInput);

    // form input validation
    if (!userNameInput) {
        alert("You must include your name!");
        return false;
    }
    formEl.requestFullscreen();
    // package up as data object
    let userDataObj = {
        name: userNameInput,
        // ! REINTRODUCE ONCE SCORES ARE ACCOUNTED FOR
        // score: userScoreRecord
    }
    // send as argument to userRecordEl
    userRecordEl(userDataObj);
};


//? createTaskEl
let userRecordEl = function (userDataObj) {
    // create user to 'Score Board'
    let userScoreEl = document.createElement("li");
    userScoreEl.className = "user-score";

    // ! REINTRODUCE ONCE SCORES ARE ACCOUNTED FOR
    // // create div to hold score
    // ? taskInfoEl
    let scoreEl = document.createElement('div');
    scoreEl.className = "score";
    // // add score to html
    scoreEl.innerHTML = "<h4 id='user-input' style='strong'>" + userDataObj.name + "</h4>"; //<span class='score'>" + userDataObj.score + "</span>";

    userScoreEl.appendChild(scoreEl);

    // add user & score <li> to entire list
    userListEl.appendChild(userScoreEl);

}

const multipleChoiceHandler = function (event) {

    console.log(event.target);

    if (event.target.matches('.correct')) {
        console.log('SMARTY PANTS');
    } else {
        console.log('DUMBDUMB');
    }
}

formEl.addEventListener('submit', userInputHandler);
quizQuestionBtns.forEach(function (button) {
    button.addEventListener('click', (event) => {
        console.log(event.target);
        multipleChoiceHandler(event);
    });
});





