"use strict";

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const selections = ["Rock", "Paper", "Scissors"];

function getPlayerChoice() {
  let playerChoice = prompt("Please select: rock, paper or scissors");
  playerChoice =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  return playerChoice;
}

function checkPlayerChoice(playerChoice, selections) {
  return playerChoice === selections[0] ||
    playerChoice === selections[1] ||
    playerChoice === selections[2]
    ? true
    : false;
}

playerSelection = getPlayerChoice();
let checkSelection = checkPlayerChoice(playerSelection, selections);

console.log(`Player selected: ${playerSelection}`);
console.log(`Input selection correct: ${checkSelection}`);

while (!checkSelection) {
  console.log("Incorrect selection, please re-enter your choice...");
  playerSelection = getPlayerChoice();
  checkSelection = checkPlayerChoice(playerSelection, selections);
  console.log(`Player selected: ${playerSelection}`);
  console.log(`Input selection correct: ${checkSelection}`);
}

function getComputerChoice(selections) {
  let randomNumber = randomSelection();
  console.log(`Random number generated for computer choice: ${randomNumber}`);
  return selections[randomNumber];
}

function randomSelection() {
  return Math.floor(Math.random() * 3);
}

computerSelection = getComputerChoice(selections);
console.log(`Computer selected: ${computerSelection}`);
