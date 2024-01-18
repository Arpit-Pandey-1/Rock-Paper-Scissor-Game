let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play Again.";
  msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userChoicePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compChoicePara.innerText = compScore;
    msg.innerText = `You Loose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // Generate Computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
