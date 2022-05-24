const choices = ["water", "fire", "grass"];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
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

function checkWinner(pChoice, cChoice) {
  if (pChoice === cChoice) {
    return "Tie";
  } else if (
    (pChoice === "water" && cChoice == "grass") ||
    (pChoice === "fire" && cChoice == "water") ||
    (pChoice === "grass" && cChoice == "fire")
  ) {
    return "Computer";
  } else {
    return "Player";
  }
}

game();
