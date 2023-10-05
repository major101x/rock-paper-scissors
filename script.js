// Returns a random choice of the computer from an array
const getComputerChoice = () => {
  let result = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * result.length);
  return result[random];
};

// Returns a string showing a win or loss for a round
const playRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  //Logic to calculate the winner
  if (playerSelection === "" || playerSelection === undefined) {
    alert("Invalid Selection!!!");
  } else if (playerSelection === computerSelection) {
    return `It's a draw!!! ${playerSelection} ties with ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose!!! ${computerSelection} beats ${playerSelection}`;
  }
};

let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
