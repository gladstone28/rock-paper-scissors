const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!,please type:rock, paper, or scissors");
  }
};
/*
Test the function by calling it with valid and invalid input, and printing the results to the console.

You can delete this when you know your function works.
*/
/*console.log(getUserChoice('Paper')); // should print 'paper'
console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`
*/
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice == "scissors") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, Computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You threw:" + userChoice);
  console.log("the Computer threw " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
