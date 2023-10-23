const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const finalResult = document.querySelector(".final-result");
const playerScoreCount = document.querySelector(".player-score");
const computerScoreCount = document.querySelector(".computer-score");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    playRound(event.target.textContent, getComputerChoice);
    playerScoreCount.textContent = playerScore;
    computerScoreCount.textContent = computerScore;
  });
});

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
playerScoreCount.textContent = playerScore;
computerScoreCount.textContent = computerScore;

// Returns a string showing a win or loss and adds to the winner's score for a round
const playRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();

  //Logic to calculate the winner
  if (playerSelection === "" || playerSelection === undefined) {
    alert("Invalid Selection!!!");
  } else if (playerSelection === computerSelection) {
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    result.textContent = `It's a draw!!! ${playerSelection} ties with ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    result.textContent = `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    result.textContent = `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    result.textContent = `You Win!!! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    result.textContent = `You Lose!!! ${computerSelection} beats ${playerSelection}`;
  }
  gameWinner();
};

const disableBtn = () => {
  btn.forEach((btn) => {
    btn.disabled = true;
  });
};

// Returns winner of 5 rounds
const gameWinner = () => {
  if (computerScore === 5) {
    finalResult.textContent = "You Lose! Game Over!!!";
    disableBtn();
  } else if (playerScore === 5) {
    finalResult.textContent = "You Win! Victory is yours!!!";
    disableBtn();
  }
};
