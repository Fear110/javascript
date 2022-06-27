'use strict';

// document.querySelector('.btn--roll').addEventListener('click', function () {
//   console.log('this is ');
// });

/*
const rollDice = document.querySelector('.btn--roll');
let totalNumber = 0;
let playerOneTotal = 0;


let firstRoll = function(){ rollDice.addEventListener('click', function () {
  let randomNum = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNum);

  if (randomNum === 6) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    playerOneTotal = totalNumber;
    document.querySelector('.dice').src = 'dice-6.png';
  } else if (randomNum === 2) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    playerOneTotal = totalNumber;
    document.querySelector('.dice').src = 'dice-2.png';
  } else if (randomNum === 3) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    playerOneTotal = totalNumber;
    document.querySelector('.dice').src = 'dice-3.png';
  } else if (randomNum === 4) {
    totalNumber = totalNumber + randomNum;
    document.querySelector('.current-score').textContent = totalNumber;
    playerOneTotal = totalNumber;
    document.querySelector('.dice').src = 'dice-4.png';
  } else if (randomNum === 5) {
    
    document.querySelector('.dice').src = 'dice-5.png';
  } else {
    playerOneTotal = totalNumber;  
    document.querySelector('.current-score').textContent = "0"; 
    document.querySelector('.score').textContent = playerOneTotal;
    document.querySelector('.dice').src = 'dice-1.png';
  }
});
}

firstRoll();

*/
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scoreFirstElement = document.querySelector('#score--0');
const scoreSecondElement = document.getElementById('score--1');
const dicePicElement = document.querySelector('.dice');
const ButtonNew = document.querySelector('.btn--new');
const ButtonRoll = document.querySelector('.btn--roll');
const ButtonHold = document.querySelector('.btn--hold');
const currentFirstScore = document.querySelector('#current--0');
const currentSecondScore = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

scoreFirstElement.textContent = 0;
scoreSecondElement.textContent = 0;
dicePicElement.classList.add('hidden');

let activePLayer = 0;
let currentScore = 0;
const scores = [0, 0];

ButtonRoll.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  dicePicElement.classList.remove('hidden');
  dicePicElement.src = `pic/dice-${randomNumber}.png`;
  if (randomNumber !== 1) {
    currentScore = currentScore + randomNumber;
    document.getElementById(`current--${activePLayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePLayer}`).textContent = 0;
    activePLayer = activePLayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

ButtonHold.addEventListener('click', function () {
  scores[activePLayer] += currentScore;
  document.getElementById(`score--${activePLayer}`).textContent =
    scores[activePLayer];
  currentScore = 0;
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  if (scores[0] >= 10) {
    document.querySelector(`.player--0`).classList.add('player--winner');
    document.querySelector(`.player--0`).classList.remove('player--active');
  } else if (scores[1] >= 10) {
    document.querySelector(`.player--1`).classList.add('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--active');
  }
});

ButtonNew.addEventListener('click', function () {
  scoreFirstElement.textContent = 0;
  scoreSecondElement.textContent = 0;
  dicePicElement.classList.add('hidden');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  scores[0] = 0;
  scores[1] = 0;
});
