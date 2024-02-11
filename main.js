let userPoints = 0;
let computerPoints = 0;
let roundCounter = 0;
let resultMessage;

// DOM elements
let playerScore = document.querySelector("#current-player-score");
let computerScore = document.querySelector("#current-computer-score");
let lastPlayerChoice = document.querySelector("#last-player-choice");
let lastComputerChoice = document.querySelector("#last-computer-choice");
let message = document.querySelector("#result-message-text");
let currentRound = document.querySelector("#current-round");
let btn = document.querySelector("#btn");
let restart = document.querySelector("#Restart");
let round = document.querySelector("#round");
let choice = document.querySelector("#choice");

// Initial score
playerScore.textContent = 0;
computerScore.textContent = 0;
currentRound.textContent = roundCounter;

// Get Computer Choice
let getComputerChoice = () => {
  let choiceArray = ["Rock", "Paper", "Scissor"];
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
};

// Handle btn selected
const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  let target = event.target;
  let playerChoice = "";
  switch (target.id) {
    case "Rock":
      playerChoice = target.id;
      console.log(`User: ${playerChoice}`);
      playRound(playerChoice, roundCounter);
      break;
    case "Paper":
      playerChoice = target.id;
      console.log(`User: ${playerChoice}`);
      playRound(playerChoice, roundCounter);
      break;
    case "Scissor":
      playerChoice = target.id;
      console.log(`User: ${playerChoice}`);
      playRound(playerChoice, roundCounter);
      break;
    case "Restart":
      restartGame();
  }
  checkScore(userPoints, computerPoints);
});

// Play one Round
let playRound = (playerChoice) => {
  let computerChoice = getComputerChoice();
  console.log(`Comp: ${computerChoice}`);
  if (computerChoice === playerChoice) {
    resultMessage = "It's a tie.";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    resultMessage = "You lost, Paper beats Rock!";
    computerPoints = computerPoints + 1;
  } else if (playerChoice == "Rock" && computerChoice == "Scissor") {
    resultMessage = "You won, Rock beats Scissor!";
    userPoints = userPoints + 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    resultMessage = "You won, Paper beats Rock!";
    userPoints = userPoints + 1;
  } else if (playerChoice == "Paper" && computerChoice == "Scissor") {
    resultMessage = "You lost, Scissor beats Paper!";
    computerPoints = computerPoints + 1;
  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    resultMessage = "You won, Scissor beats Paper!";
    userPoints = userPoints + 1;
  } else if (playerChoice == "Scissor" && computerChoice == "Rock") {
    resultMessage = "You lost, Rock beats Scissor!";
    computerPoints = computerPoints + 1;
  }
  roundCounter = roundCounter + 1;
  console.log(roundCounter);
  currentRound.textContent = roundCounter;
  message.textContent = resultMessage;
  playerScore.textContent = userPoints;
  computerScore.textContent = computerPoints;
  lastPlayerChoice.textContent = playerChoice;
  lastComputerChoice.textContent = computerChoice;
  return { userPoints, computerPoints, roundCounter };
};

// Check if game has ended
let checkScore = (userPoints, computerPoints) => {
  if (userPoints === 5 || computerPoints === 5) {
    showWinnerMessage(userPoints, computerPoints);
    btn.classList.add("hidden");
    round.classList.add("hidden");
    choice.classList.add("hidden");
    restart.classList.remove("hidden");
  }
};

// Show winner message
let showWinnerMessage = (userPoints, computerPoints) => {
  if (userPoints === 5) {
    resultMessage = `Congrats, you won the game!`;
  } else if (computerPoints === 5) {
    resultMessage = `Sorry, you lost the game!`;
  }
  message.textContent = resultMessage;
};

// Restart Game
let restartGame = () => {
  userPoints = 0;
  computerPoints = 0;
  roundCounter = 0;
  resultMessage = "";
  message.textContent = resultMessage;
  playerScore.textContent = userPoints;
  computerScore.textContent = computerPoints;
  currentRound.textContent = roundCounter;
  btn.classList.remove("hidden");
  round.classList.remove("hidden");
  choice.classList.remove("hidden");
  restart.classList.add("hidden");
};