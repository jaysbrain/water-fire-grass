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

  let check = validateInput(input);

  while (check == false) {
    input = prompt(
      "Type Water, Fire, or Grass. Spelling matters. Case doesn't."
    );
    while (input == null) {
      input = prompt("Type Water, Fire, or Grass");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }

  return input;
}

function validateInput(choice) {
  return choices.includes(choice);
}
