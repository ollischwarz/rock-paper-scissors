let userPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;
let resultMessage = "";

// DOM elements
let playerScore = document.querySelector("#current-player-score");
let computerScore = document.querySelector("#current-computer-score");
let lastPlayerChoice = document.querySelector("#last-player-choice");
let lastComputerChoice = document.querySelector("#last-computer-choice");

// Get Computer Choice
let getComputerChoice = () => {
  let choiceArray = ["Rock", "Paper", "Scissor"];
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
};

// Handle btn selected
const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  let playerChoice = "";
  let target = event.target;
  switch (target.id) {
    case "Rock":
        playerChoice = target.id;
      console.log(`User: ${playerChoice}`);
      playRound(playerChoice, userPoints, computerPoints);
      break;
    case "Paper":
        playerChoice = target.id;
      console.log(`User: ${playerChoice}`);
      playRound(playerChoice, userPoints, computerPoints);
      break;
    case "Scissor":
        playerChoice = target.id;
      console.log(`User: ${playerChoice}`);
      playRound(playerChoice, userPoints, computerPoints);
      break;
  }
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
  console.log(resultMessage);
  console.log(userPoints, computerPoints);
  playerScore.textContent = userPoints;
  computerScore.textContent = computerPoints;
  lastPlayerChoice.textContent = playerChoice;
  lastComputerChoice.textContent = computerChoice;
  return { userPoints, computerPoints };
};
