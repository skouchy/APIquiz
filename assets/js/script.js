let quizContent = [
    {//question 1: quizContent[0]
        question: "If javaScript was an icecream, what flavor would it be?",
        choices: [
            "coffee",
            "rockyRoad",
            "vanilla",
            "allTheAbove"],
        answer: "allTheAbove"
    },
    {//question 2: quizContent[1]
        question: "What does DOM stand for?",
        choices: [
            "departmentOfMondays",
            "dressingOddMonkeys",
            "Document Object Model",
            "defendOurMemories"],
        answer: "Document Object Model"
    },
    {//question 3: quizContent[2]
        question: "What purpose does JavaScript have on a browser's content?",
        choices: [
            "makesItPretty",
            "allowsAnInteractiveExperience",
            "disablesAllFunctionality", "deliversHotCoffeeToYourDeskForFocusedWebSurfing"],
        answer: "allowsAnInteractiveExperience"
    },
    {//question 4: quizContent[3]
        question: "Which of these is NOT a <button> type?",
        choices: [
            "reset",
            "zipper",
            "button",
            "submit"],
        answer: "zipper"
    }]

const startButton = document.getElementById('start-btn');
let optionA = document.getElementById("clickA");
let optionB = document.getElementById("clickB");
let optionC = document.getElementById("clickC");
let optionD = document.getElementById("clickD");
const nextQuestion = document.getElementById('next-btn');

let position = 0;
let points = 0;
let timerCount = document.getElementById('timer-count');
let time = 75;
timerEl.textContent = time;
// let initials = document.getElementById('#user-input');
// let submitUser = document.getElementById('#submit-btn')
// let scoreBoard = document.getElementById('#scoreboard')
// const resetBtn = document.getElementById('#clear-scores-btn');
// const backToStartBtn = document.getElementById('#start-over-btn');
function startTimer() {
    document.getElementById('start-home').style.display = "none";
    document.getElementById('quiz').style.display = "block";
    setInterval(function () {
        timerCount = time--;
        timerEl.textContent = time;
    }, 1000);
    if (timerCount === 0) {
        clearInterval;

    }
    nextPlease();
}
startButton.addEventListener("click", startTimer);


function nextPlease() {
    if (time > 0) {
        document.querySelector("#current-question").innerText = quizContent[position].question,
            document.querySelector("#clickA").innerText = quizContent[position].choices[0],
            document.querySelector("#clickB").innerText = quizContent[position].choices[1],
            document.querySelector("#clickC").innerText = quizContent[position].choices[2],
            document.querySelector("#clickD").innerText = quizContent[position].choices[3];

        if (quizContent[position] < quizContent.length) {
            [position++]
        } else {
            clearInterval();
            // submitScore();
        }


    } else { }
};
// timedOut();
// if (timerCount > 0 && quizContent[position] < quizContent.length) {




// else {(timerCount === 0) 


// nextPlease()
function timedOut() {
    document.getElementById('start-home').style.display = "none";
    document.getElementById('quiz').style.display = "none";
    document.getElementById('scoreboard').style.display = "block";
    clearInterval();
}
//whatever functions checks answers will check the answers first and then 
// function startGame() {
//     var render = nextQuestion.style.display = 'block';
//     console.log("clicked");
//     }


// if (timerCount >= 0) {
//   if (completeQuiz && timerCount > 0) {
//     // Clears interval and stops timer
//     // clearInterval(timer);
//
// }
// // Tests if time has run out
// if (timerCount === 0) {
//   // Clears interval
//   clearInterval(timer);
//   loseGame();
// }


let highScores = localStorage.getItem("highscores") || []

function submitScore() {
    let username = document.getElementById("user-input").value;
    let scoreEntry = {
        name: username,
        score: points,
        timeLeft: time
    }
    scoreEntry.push(highScores)

}


// function quizContent() {

//     userChoice();

const userChoice = ("click", function (event) {
    console.log('made it to userChoice');
    console.log(event.target.textContent);
    if (event.target.textContent === quizContent[0].answer) {
        console.log('is it a string or nah');
// * Point logic goes here and timer subtraction
        // else {console.log("X");}
        // if (event.target.value === true) {
        //     points += 3;
        //     score = points.concat(score);
        // }
        // else {
        //     time = (time) - points;
        // }

    }
    // nextPlease();
});


optionA.addEventListener("click", userChoice);
// function choiceAnswer(event) {

// }

optionB.addEventListener("click", userChoice);
// function choiceAnswer(event) {

// }
optionC.addEventListener("click", userChoice);
// function choiceAnswer(event) {

// }
optionD.addEventListener("click", userChoice);
// }

// Calls init() so that it fires when page opened
// init();

// const button = document.querySelector('#button');
console.log(userChoice)
// const disableButton = () => {
//     clearScores.disabled = true;
// };

// clearScores.addEventListener('click', disableButton);


// function choiceAnswer(event) {

// }

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
// currentQuestion = quizBits[0][0],
//     optionA = quizBits[1][0][0],
//     optionB = quizBits[1][0][1],
//     optionC = quizBits[1][0][2],
//     optionD = quizBits[1][0][3];

//     console.log(currentQuestion);
//     console.log(optionA);
//     console.log(optionB);
//     console.log(optionC);
//     console.log(optionD);
// document.addEventListener("click", function (event) {
//     console.log(event.target.value)
// })