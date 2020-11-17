'use strict';

// selecting the element
/*
  console.log(document.querySelector('.message'));
*/

// Reading the text
/*
  console.log(document.querySelector('.message').textContent);
*/

// setting the text value
/*
  document.querySelector('.message').textContent = 'Correct Your Number';

  document.querySelector('.number').textContent = 13;

  document.querySelector('.score').textContent = 100;
*/

// With an input field to get the value, we use document.querySelector(‘selector’).value

// setting the input value to 50 and then reading the input value later
/*
  document.querySelector('.guess').value = 50;
  console.log(document.querySelector('.guess').value);
*/

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listner
// addEventListener takes 2 arguments:
// 1st argument: kind of event
// 2nd argument: a function expression telling what should happen when the event happens. In this case we are reading the value of
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    // When you win
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //document.querySelector('.message').textContent = '🥳 Yay! You are the winner! That is the correct number';
    displayMessage('Yay! You are the winner! That is the correct number');
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = '#ff5050';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈Too High': '📉Too Low' ;
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      //document.querySelector('.message').textContent = '😥 Sorry You Lost The Game!';
      displayMessage('😥 Sorry You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //   // When the guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High';
  //     score--;
  //     document.querySelector('.score').textContent = `${score}`;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '😥 Sorry You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   // When the guess is too low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = `${score}`;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '😥 Sorry You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('body').style.backgroundColor = '#222';
});
