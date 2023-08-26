# Odin Rock, Paper, Scissors Game

This rock, paper, scissors game was part of [The Odin Project](https://www.theodinproject.com) course.

## Table of contents

- [Project Overview](#project-overview)
- [Rock Paper Scissors Game](#rock-paper-scissors-game)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Project Overview

The assignment was to create a basic rock, paper, scissors game using JavaScript to be run in the developer console. The main focus was to plan and break down the project into smaller pieces before coding and testing each piece.

- [Plan](Plan.md)
- [Pseudocode](Pseudocode.md)
- [Flow chart](Flowchart-rock-paper-scissors.jpg)

## Rock Paper Scissors Game

### Screenshots

Desktop:  
![Desktop screenshot](./img/desktop-screenshot.jpg)

### Links

- Solution URL: [https://github.com/VTickner/odin-rock-paper-scissors](https://github.com/VTickner/odin-rock-paper-scissors)
- Live Site URL: [https://vtickner.github.io/odin-rock-paper-scissors/](https://vtickner.github.io/odin-rock-paper-scissors/)

## Process

- Created the basic plan for the game - rules, interface, inputs, outputs.
- Created pseudocode to describe how it will work.
- Created a flowchart to show how the game will work.
- Created a basic HTML page (initially game will played within the browser developer console).
- Broke the game down into smaller sections to code and then test each part as I went along:
  - Initial value setup, get player input, check player input and redo get player input if not a correct option.
  - Generate random numbers (to be used for computer selection).
  - Get computer selection.
  - Compare who won that round and add a point to the winner's score.
  - Play further rounds until either the player or computer scores = 5.
  - Output overall winner of the game with scores.
- Refactored the JavaScript to make DRY.
- Added a reset game function.

### Built with

- HTML5
- JavaScript

### What I learned

Planning how the different elements and parts of the game were going to work and interact upfront was extremely useful in breaking down the game into smaller sections. This allowed easier coding of the game and for it to be created and tested in stages. The pre-planning also helped structure the code so that it was easier to refactor it.

When taking the input from the player, I formatted it to match the choice options. I also created a function to ensure that the input was a valid option of Rock, Paper or Scissors.

```js
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
```

A reset game function wasn't part of the assignment, but I added one to make the game easier to re-run if a player wanted to have another go. As part of creating the reset function, I learned how to reset variables in order to be able to restart the game.

### Continued development

Improving my planning - particularly in writing pseudocode. Planning more before coding will help me improve how I approach the coding of a project.

Future improvements to the game:

- Create a graphical user interface in HTML (so that the game doesn't need to be played in the development console).

### Useful resources

- [https://app.diagrams.net/](Draw.io) - Free online diagram software for making flowcharts, process diagrams, etc.

## Author

- V. Tickner
