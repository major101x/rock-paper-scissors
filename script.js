// Returns a random choice of the computer from an array
const getComputerChoice = () => {
  let result = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * result.length);
  return result[random];
};

// Helper function
const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

let playerScore = 0;
let computerScore = 0;

// Returns a string showing a win or loss and adds to the winner's score for a round
const playRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();
  playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection = capitalize(playerSelection);
  console.log(playerSelection);
  console.log(computerSelection);

  //Logic to calculate the winner
  if (playerSelection === "" || playerSelection === undefined) {
    alert("Invalid Selection!!!");
  } else if (playerSelection === computerSelection) {
    return `It's a draw!!! ${playerSelection} ties with ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You Lose!!! ${computerSelection} beats ${playerSelection}`;
  }
};

// Keep scores and returns winner of 5 rounds
const game = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound());
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
  if (computerScore > playerScore) {
    return "Game Over!!!";
  } else {
    return "Victory is yours!!!";
  }
};
