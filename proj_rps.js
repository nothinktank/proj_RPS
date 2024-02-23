

console.log("Hello, World!");

function getComputerChoice() {
  const getRandomNumber = Math.floor(Math.random() * 3);
  
  if (getRandomNumber === 1) {
    return "rock";
  }else if (getRandomNumber === 0) {
    return "paper";
  }else{
    return "scissors";
  }

}

function playRound(playerSelection, computerSelection) {
  const p = playerSelection;
  const c = computerSelection;
  
  if (p === "rock" && c === "rock") {
    console.log ("its a tie!");
  }else if (p === "rock" && c === "paper"){
    console.log ("you lose!");
  }else if (p === "rock" && c === "scissors"){
    console.log ("you win!");
  }else if (p === "paper" && c === "rock"){
    console.log ("you win!");
  }else if (p === "paper" && c === "paper"){
    console.log ("its a tie!");
  }else if (p === "paper" && c === "scissors"){
    console.log ("you lose!");
  }else if (p === "scissors" && c === "rock"){
    console.log ("you lose!");
  }else if (p === "scissors" && c === "paper"){
    console.log ("you win!");
  }else{
    console.log ("its a tie!");
  }

}

const playerSelection = "pAper";
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(playerSelection,computerSelection);
