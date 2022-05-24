const choices = ["water", "fire", "grass"];

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
