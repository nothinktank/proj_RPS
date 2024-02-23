


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

let result = 0;

function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();
  

  if (p === "rock" && c === "rock") {
    console.log ("its a tie!");
    return result = 0;
  }else if (p === "rock" && c === "paper"){
    console.log ("you lose!");
    return result = -1;
  }else if (p === "rock" && c === "scissors"){
    console.log ("you win!");
    return result = 1;
  }else if (p === "paper" && c === "rock"){
    console.log ("you win!");
    return result = 1;
  }else if (p === "paper" && c === "paper"){
    console.log ("its a tie!");
    return result = 0;
  }else if (p === "paper" && c === "scissors"){
    console.log ("you lose!");
    return result = -1;
  }else if (p === "scissors" && c === "rock"){
    console.log ("you lose!");
    return result = -1;
  }else if (p === "scissors" && c === "paper"){
    console.log ("you win!");
    return result = 1;
  }else{
    console.log ("its a tie!");
    return result = 0;
  }

}
/*
const playerSelection = "scissorS";
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(playerSelection,computerSelection);
*/

function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  
  for (let n = 1; n <= 5; n++){
    let playerPick = prompt("rock, paper, or scissors?");
    let computerPick = getComputerChoice();
    console.log(computerPick);
    

    playRound(playerPick, computerPick);
     console.log(result);

    if (result === 0) {
      console.log("tie")
    }else if (result === 1) {
      console.log("player wins")
      playerWins ++; 
    }else {
      console.log("computer wins")
      computerWins ++;
    };
  };
 
  if (playerWins === computerWins) {
    console.log("its a tie in 5 tries");
  }else if (playerWins < computerWins){
    console.log("you lost in 5 tries");
  }else {
    console.log("you won in 5 tries");
  };
}

playGame();