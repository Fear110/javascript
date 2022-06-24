'use strict';

// document.querySelector('.btn--roll').addEventListener('click', function () {
//   console.log('this is ');
// });

const rollDice = document.querySelector('.btn--roll');
let totalNumber = 0;
let playerOneTotal = 0;


let firstRoll = function(){ rollDice.addEventListener('click', function () {
  let randomNum = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNum);

  if (randomNum === 6) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    document.querySelector('.dice').src = 'dice-6.png';
    playerOneTotal = totalNumber;
  } else if (randomNum === 2) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    document.querySelector('.dice').src = 'dice-2.png';
    playerOneTotal = totalNumber;
  } else if (randomNum === 3) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    document.querySelector('.dice').src = 'dice-3.png';
    playerOneTotal = totalNumber;
  } else if (randomNum === 4) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    document.querySelector('.dice').src = 'dice-4.png';
    playerOneTotal = totalNumber;
  } else if (randomNum === 5) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    document.querySelector('.dice').src = 'dice-5.png';
    playerOneTotal = totalNumber;
  } else {
    playerOneTotal = totalNumber;  
    document.querySelector('.current-score').textContent = "0"; 
    document.querySelector('.score').textContent = playerOneTotal;
    document.querySelector('.dice').src = 'dice-1.png';
  }
});
}

firstRoll();