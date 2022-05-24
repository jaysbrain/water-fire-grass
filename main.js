const choices = ["water", "fire", "grass"];
let winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Reset";
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
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

function logWins() {
  let playerWins = winners.filter((winner) => winner === "Player").length;
  let computerWins = winners.filter((winner) => winner === "Computer").length;
  let ties = winners.filter((winner) => winner === "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
  if (playerWins > computerWins) {
    console.log("Player won the game!");
  } else if (computerWins > playerWins) {
    console.log("Computer won the game!");
  } else {
    console.log("The game ended in a tie.");
  }
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  if (winner === "Player" || winner === "Computer") {
    console.log(winner, "won the round.");
  } else {
    console.log("It's a tie.");
  }
  console.log("-------------------------------");
}
