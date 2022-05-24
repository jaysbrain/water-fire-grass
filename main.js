const choices = ["water", "fire", "grass"];

function game() {
  playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
  let input = prompt("Type Water, Fire, or Grass");

  while (input == null) {
    input = prompt("Type Water, Fire, or Grass");
  }

  input = input.toLowerCase();
}
