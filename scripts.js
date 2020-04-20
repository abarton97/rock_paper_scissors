let playerPoints = 0;
let computerPoints = 0;
const MAX_POINTS = 5;
let active = true;
let done = true;

function computerPlay() {
  let responses = ["rock", "paper", "scissors"];
  return responses[Math.floor(Math.random() * 3)];
}

function showResult(resultString) {
  const container = document.querySelector("#results");
  const result = document.createElement('div');
  result.classList.add('result');
  result.textContent = resultString;
  container.appendChild(result);
}

function playRound() {
  const playerSelection = this.id;
  const computerSelection = computerPlay();
  let result;
  let resultString;
  if (active) {
    if (computerSelection == playerSelection) {
      resultString = "It's a tie.";
    } else if (computerSelection == 'rock') {
      if (playerSelection == 'paper') {
        resultString = `You win this round, ${playerSelection} beats ${computerSelection}`;
        playerPoints++;
      } else {
        resultString = `You lose this round, ${computerSelection} beats ${playerSelection}`;
        computerPoints++;
      }
    } else if (computerSelection == 'paper') {
      if (playerSelection == 'scissors') {
        resultString = `You win this round, ${playerSelection} beats ${computerSelection}`;
        playerPoints++;
      } else {
        resultString = `You lose this round, ${computerSelection} beats ${playerSelection}`;
        computerPoints++;
      }
    } else if (computerSelection == 'scissors') {
      if (playerSelection == 'rock') {
        resultString = `You win this round, ${playerSelection} beats ${computerSelection}`;
        playerPoints++;
      } else {
        resultString = `You lose this round, ${computerSelection} beats ${playerSelection}`;
        computerPoints++;
      }
    }
  }
  updateScore();
  showResult(resultString);
  declareWinner();
}

function updateScore() {
  const container = document.querySelector("#scoreboard");
  // Remove the old score.
  const oldScore = document.getElementById("score")
  oldScore.parentNode.removeChild(oldScore);
  // Create and show new score.
  let scoreString = `Score: You - ${playerPoints} | Computer - ${computerPoints}`;
  const score = document.createElement('div');
  score.id = 'score';
  score.textContent = scoreString;
  container.appendChild(score);
}

function declareWinner() {
  if (done) {
    let winString;
    const winMsg = document.createElement('div');
    const container = document.querySelector("#winner");
    winMsg.classList.add('win');

    let winString1;
    const winMsg1 = document.createElement('div');
    const container1 = document.querySelector("#loser");
    winMsg1.classList.add('win');

    if (playerPoints == 5) {
      winString = "Congrats, you win!"
      winMsg.classList.add('win-player');
      active = false;
      done = false;
    } else if (computerPoints == 5) {
      winString1 = "Sorry, you lose!"
      winMsg1.classList.add('win-computer');
      active = false;
      done = false;
    }

    winMsg.textContent = winString;
    container.appendChild(winMsg);

    winMsg1.textContent = winString1;
    container1.appendChild(winMsg1);
  }
}


function game() {
  if (active = true) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', playRound);
    });
  }
}
game();
