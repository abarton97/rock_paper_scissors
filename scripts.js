let playerWins = 0;
let computerWins = 0;
let active = true;

function startGame() {
  const playerSelection = this.id;
  const computerSelection = computerPlay();
  let results;
  if (active) {
    if (computerSelection == 'rock') {
      if (playerSelection == 'paper') {
        results = `You win this round, ${playerSelection} beats ${computerSelection}`;
        playerWins++;
      } else {
        results = `You lose this round, ${computerSelection} beats ${playerSelection}`;
        computerWins++;
      }
    }
    if (computerSelection == 'paper') {
      if (playerSelection == 'scissors') {
        results = `You win this round, ${playerSelection} beats ${computerSelection}`;
        playerWins++;
      } else {
        results = `You lose this round, ${computerSelection} beats ${playerSelection}`;
        computerWins++;
      }
    }
    if (computerSelection == 'scissors') {
      if (playerSelection == 'rock') {
        results = `You win this round, ${playerSelection} beats ${computerSelection}`;
        playerWins++;
      } else {
        results = `You lose this round, ${computerSelection} beats ${playerSelection}`;
        computerWins++;
      }
    }
    let player_score = playerWins;
    let computer_score = computerWins;
    document.getElementById("player_score").innerHTML = `${player_score}`;
    document.getElementById("computer_score").innerHTML = `${computer_score}`;
    document.getElementById("results").innerHTML = `${results}`;
    announceWinner();
  }
}

function announceWinner() {
  let winner = 'Congrats, you win!';
  let loser = 'Sorry, you lose!';
  if (active = true) {
    if (playerWins == 5) {
      document.getElementById("winner").innerHTML = `${winner}`;
      active = false;
    } else if (computerWins == 5) {
      document.getElementById("loser").innerHTML = `${loser}`;
      active = false;
    }
  }
}

function computerPlay() {
  let responses = ["rock", "paper", "scissors"];
  return responses[Math.floor(Math.random() * responses.length)];
}

function game() {
  if (active = true) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', startGame);
    });
  }
}

game();
