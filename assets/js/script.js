const quizBits = [
    [ //quizBits[0][0-3]
        ["If javaScript was an icecream, what flavor would it be?"],
        ["What does DOM stand for?"],
        ["What purpose does JavaScript have on a browser's content?"],
        ["Which of these is NOT a <button> type?"]
    ]
    ,
    [//quizBits[1][0-3][0-3]
        ["coffee",
            "rockyRoad",
            "vanilla",
            ("allTheAbove".valueOf = true)]
        ,
        ["departmentOfMondays",
            "dressingOddMonkeys",
            ("Document Object Model".valueOf = true), "defendOurMemories"]
        ,
        ["makesItPretty", ("allowsAnInteractiveExperience".valueOf = true),
            "disablesAllFunctionality", "deliversHotCoffeeToYourDeskForFocusedWebSurfing"]
        ,
        ["reset",
            ("zipper".valueOf = true),
            "button",
            "submit"]
    ]]
console.log(quizBits);

const startButton = document.getElementById('start-btn');
let currentQuestion = document.getElementById("current-question");
let optionA = document.getElementById("clickA");
let optionB = document.getElementById("clickB");
let optionC = document.getElementById("clickC");
let optionD = document.getElementById("clickD");
let timerCount = document.getElementById('timer-count');
let score = [];
let timeStart = 75;
timerEl.textContent = timeStart;
const nextQuestion = document.getElementById('next-btn');
// let multipleChoice = document.querySelector('.multiple-choice');
// let currentAnswers = document.getElementsByClassName('.current-answers');
// let optionA = document.getElementById('#spanA');
// let optionB = document.getElementById('#spanB');
// let optionC = document.getElementById('#spanC');
// let optionD = document.getElementById('#spanD');
// let initials = document.getElementById('#user-input');
// let submitUser = document.getElementById('#submit-btn')
// let scoreBoard = document.getElementById('#scoreboard')
// const resetBtn = document.getElementById('#clear-scores-btn');
// const backToStartBtn = document.getElementById('#start-over-btn');
// let questionIndex = 0;
// var timer;

// function startGame() {
//     var render = nextQuestion.style.display = 'block';
//     console.log("clicked");
//     }
function startGame() {
    document.getElementById('start-home').style.display = "none";
    document.getElementById('quiz').style.display = "block";
    startTimer();
    quizContent();
}

function startTimer(event) {
    // Sets timer
    //   render(timeStart);
    timer = setInterval(function () {
        timerCount = timeStart--;
        timerEl.textContent = timeStart;

        // if (timerCount >= 0) {
        //   if (completeQuiz && timerCount > 0) {
        //     // Clears interval and stops timer
        //     // clearInterval(timer);
        //     var score = timerCount[''] * numberCorrect[''];
        //   }
        // }
        // // Tests if time has run out
        // if (timerCount === 0) {
        //   // Clears interval
        //   clearInterval(timer);
        //   loseGame();
        // }
    }, 1000);
}

currentQuestion = quizBits[0][0],
    optionA = quizBits[1][0][0],
    optionB = quizBits[1][0][1],
    optionC = quizBits[1][0][2],
    optionD = quizBits[1][0][3];

    console.log(currentQuestion);
    console.log(optionA);
    console.log(optionB);
    console.log(optionC);
    console.log(optionD);

function quizContent() {

    userChoice();

    function userChoice() {
        if (value === true) {
            let points = 3;
            score = points.concat(score);
        }
        else {
            timerCount = (timerCount) - points;
        }

    }
}
startButton.addEventListener("click", startGame);
// event.target
// var timerCount;
// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");

// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;


// startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
// init();

// const button = document.querySelector('#button');

// const disableButton = () => {
//     button.disabled = true;
// };

// button.addEventListener('click', disableButton);

// nextQuestion.addEventListener("click", renderNext());nextQuestion.style.display = "block";

// optionA.addEventListener("click", choiceAnswer);
// function choiceAnswer(event) {

// }

// optionB.addEventListener("click", choiceAnswer);
// function choiceAnswer(event) {

// }
// optionC.addEventListener("click", choiceAnswer);
// function choiceAnswer(event) {

// }
// optionD.addEventListener("click", choiceAnswer);
// function choiceAnswer(event) {

// }

// let startQuestion = questions[0];
// console.log(startQuestion);
// let currentAnswers = notCorrect[0].concat(correct[0]);
// console.log(currentAnswers);
// let questionStuff = document.querySelector('.current-answers');
// console.log(questionStuff);

// function renderNext() {
//     for(let index = 0, n = questions.length; index < n; index++) {
//         displayedList = ([questions[index++]] + [currentAnswers]);
//     }
//     // const currentQuestion = questions[0];
//     console.log(displayedList);


//     //     // render(currentQuestion);
//     //     // render(currentAnswers);
// }
// console.log(renderNext);
// console.log(currentQuestion);
// console.log(displayedList);
// currentAnswers = function (){
//     return (notCorrect.findIndex[0].push(correct.findIndex[0], [notCorrect.findIndex[0]]));
// }
// console.log (notCorrect.index[0]);
// console.log(currentAnswers);



// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads
// function init() {
//   getWins();
//   getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderBlanks()
//   startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
//

// // Creates blanks on screen
// function renderBlanks() {
//   // Randomly picks word from words array
//   chosenWord = words[Math.floor(Math.random() * words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click


// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);
//
// document.getElementById("clear-scores").disabled = true;