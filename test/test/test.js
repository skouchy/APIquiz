// what does DOM stand for?
// A. Depart of Moms
// B. Destructing odd monkeys
// C. 
// D. Document Object Model


// var questions = function() {
//     question1 = "";
//     question2 = "";
//     question3 = "";
//     question4 = "";
    
//     }

 


// var count = 0;
// //  Select increment and decrement button elements
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }
// // Attach event listener to increment button element
// incrementEl.addEventListener("click", function() {
    //   count++;
    //   setCounterText();
    // });
    
    // // Attach event listener to decrement button element
// decrementEl.addEventListener("click", function() {
//   // Action will fire if count is greater than  0
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });
// var truth =  [
//     "q1" , "Doc Object Model" , "q3" , "q4"
// ]
// var falser {
//     Q1 = ["false1", "false2", "false 3"]
//     Q2 = ["department of Moms", "Destructing Odd Monkeys", false3]
//     Q3 = [false1, false2, false3]
//     Q4 = [false1, false2, false3]
//     // event.target 

// do {
// function question{
//     display(falser.q2[]
//         (push.arrayTruth[2])
        
        
//         addEventListener("click", "display next question button")
//         if (truth){
//             points++, 
//         alert("good fuckin job dood!")
        
//     }
//     else {
//         function(time--),
//         alert("wrong!")
//     }
// }
// while {
//     increment(index < 4) || time > 0;
// }

//     question[index++]




// function q2{
//     arrayFalse: [false1, false2, false 3]
//     addTargetChoice[1]](push.arrayFalse[1])
//     console.log (f1, f2, TCq1, f3)
    
//     if (targetchoice){
//         points++,
        
//     }
//     else {
//         function(time),
//     }
//         function (q3)

// 
// let (setCounterText); {
//     console.log("omg it worked");
// //   countEl.textContent = count;
// }

// let btn = document.querySelector('.btn');

//  btn.addEventListener('click', function () {
//         alert('Mouse Clicked');
//  });

// let clickEvent = new setCounterText('click');
// btn.dispatchEvent(clickEvent);





// var questions = document.querySelector(".wrapper");
// var next = question.querySelector(".next");
// var prev = question.querySelector(".prev");
// var index = 0;
// var currentQuestion;

// var question = [
//     document.getElementById("#q1"),
//     document.getElementById("#q2"),
// ]





// // questions.style.background-color: yellow;
// question.setAttribute("hide")
// console.log(question.length);

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = question.length - 1; 
//   } else if (index > question.length - 1) { 
//     index = 0;
//   }
//   currentQuestion = question[index];
//   question = "" + currentQuestion + "";
// }

// // Clicking on image opens a new window containing the image
// // question.children(ol).children().addEventListener("click", function() {
// //   window.location.href = question[index];
// // });

// function myGeeks() {
//     document.getElementById("a").innerHTML
//         = 'A computer science portal for geeks';
// }

// set array length
var arrayLength = 3;

// create array
var multiArray = new Array(arrayLength);
for (var i = 0; i < multiArray.length; i++) {
  multiArray[i] = new Array(arrayLength);
}

// add items to first array index
multiArray[0][0] = "apple";
multiArray[0][1] = "banana";
multiArray[0][2] = "cherry";

// second
multiArray[1][0] = 2;
multiArray[1][1] = 56;
multiArray[1][2] = 83;

// third
multiArray[2][0] = ['test','again'];
multiArray[2][1] = ['Java','script'];
multiArray[2][2] = ['read','books'];

console.log(multiArray); // printed out in first index order
console.log(multiArray[2]); // prints out subarray
console.log(multiArray[2][2][0]); // individual item