# PSEUDOCODE - ODIN ROCK, PAPER, SCISSORS GAME

## Game rules

- Rock beats scissors
- Scissors beats paper
- Paper beats rock

## Selection limitations

Both player and computer can choose 1 of the following 3 options:

- Rock
- Paper
- Scissors

## Initial setup of game

- Initialise playerScore = 0
- Initialise computerScore = 0
- Declare playerSelection with no initial value
- Declare computerSelection with no initial value
- Create array of selections = ['Rock', 'Paper', 'Scissors']

## Play game

Play the game until either the player or computer reaches a score of 5 i.e. first one to a score of 5 wins.

while (playerScore < 5 || computerScore < 5) {

- Get input playerSelection from player using prompt
- Set playerSelection.toLowerCase() and set first letter of playerSelection.toUpperCase() to match string format of selection options in array
- Check to make sure playerSelection matches 1 of the selection options allowed

  - If playerSelection doesn't match get playerSelection again until there is a match

- Get randomly generated number of 0, 1 or 2
- Set computerSelection to item from the selections array using the randomly generated number

- Compare playerSelection and computerSelection against the games rules to work out who won the game round
- Increase either playerScore or computerScore by 1 for whoever won the game round

- Output playerSelection and computerSelection
- Output playerScore and computerScore
- Output "You won! playerSelection beats computerSelection" or "You lost! computerSelection beats playerSelection" depending upon who won the game round

}

Output overall winner at the end of the game

- (playerScore === 5) ? "You won! 5 games to computerScore" : "You lost! 5 games to playerScore"

## Reset game?

- Output "Do you want to play again?"
- Get input reset answer from player using prompt
- Set reset.toLowerCase() to match string format of 'yes'
- reset === 'yes' ? resetGame() : "Goodbye"

## resetGame()

- Set initial values back to initial set up of the game
- Call play game function to play the game again