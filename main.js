let choiceArray = ["Rock", "Paper", "Scissor"];

let getComputerChoice = () => {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
};

let getUserChoice = () => {
  let userInput = prompt("Wähle zwischen Rock, Paper oder Scissor: ");
  let playerSelection =
    userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
  return playerSelection;
};

let playRound = (userPoints, computerPoints) => {
  let playerSelection = getUserChoice();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    playRound();
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You lost, Paper beats Rock!");
    computerPoints = computerPoints + 1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
    console.log("You won, Rock beats Scissor!");
    userPoints = userPoints + 1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log("You won, Paper beats Rock!");
    userPoints = userPoints + 1;
  } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
    console.log("You lost, Scissor beats Paper!");
    computerPoints = computerPoints + 1;
  } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
    console.log("You won, Scissor beats Paper!");
    userPoints = userPoints + 1;
  } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
    console.log("You lost, Rock beats Scissor!");
    computerPoints = computerPoints + 1;
  }

  return { userPoints, computerPoints };
};

let game = () => {
  let userPoints = 0;
  let computerPoints = 0;

  while (userPoints < 5 && computerPoints < 5) {
    playRound();
    console.log(`Du hast ${userPoints} Punkte.`);
    console.log(`Der Computer hat ${computerPoints} Punkte.`);
  }
};
