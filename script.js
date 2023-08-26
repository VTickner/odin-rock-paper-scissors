"use strict";

const selections = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let validSelection = false;
let playerSelection;
let computerSelection;
let winner;

function game() {
  do {
    playerTurn();
    while (!validSelection) {
      console.log("Incorrect selection, please re-enter your choice...");
      playerTurn();
    }

    computerTurn();

    winner = playRound(playerSelection, computerSelection);
    setScores(winner);
    printCurrentScores(playerScore, computerScore);
  } while (playerScore < 5 && computerScore < 5);

  printWinner(playerScore, computerScore);

  resetGame();
}

function playerTurn() {
  playerSelection = getPlayerChoice();
  validSelection = checkPlayerChoice(playerSelection, selections);
  printSelection("Player");
}

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

function printSelection(user) {
  if (user === "Player") console.log(`${user} selected: ${playerSelection}`);
  else if (user === "Computer")
    console.log(`${user} selected: ${computerSelection}`);
}

function computerTurn() {
  computerSelection = getComputerChoice(selections);
  printSelection("Computer");
}

function getComputerChoice(selections) {
  return selections[randomSelection()];
}

function randomSelection() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`It's a draw. ${playerSelection} = ${computerSelection}!`);
    return;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    console.log(
      `You won this round. ${playerSelection} beats ${computerSelection}!`
    );
    return "Player";
  } else {
    console.log(
      `You lost this round. ${playerSelection} doesn't beat ${computerSelection}.`
    );
    return "Computer";
  }
}

function setScores(winner) {
  if (winner === "Player") playerScore++;
  else if (winner === "Computer") computerScore++;
}

function printCurrentScores(playerScore, computerScore) {
  console.log(
    `Current scores are Player: ${playerScore}, Computer: ${computerScore}`
  );
}

function printWinner(playerScore, computerScore) {
  playerScore === 5
    ? console.log(`You won the game! ${playerScore}:${computerScore}`)
    : console.log(`You lost the game! ${playerScore}:${computerScore}`);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  validSelection = false;
  playerSelection = null;
  computerSelection = null;
  winner = null;
  prompt("Do you want to play again? (yes/no)").toLowerCase() === "yes"
    ? game()
    : console.log("Goodbye, thanks for playing!");
}

game();
