
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
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();

  if (p === c){
    return 0
  } 

  switch (c) {
    case "rock":
      return p === "scissors" ? -1 : 1;
    case "paper":
      return p === "rock" ? -1 : 1;
    case "scissors":
      return p === "paper" ? -1 : 1;
      default:
        return 0;
  }

}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  
  for (let n = 1; n <= 5; n++){
    let playerPick = prompt("rock, paper, or scissors?");
    let computerPick = getComputerChoice();
    console.log(computerPick);
    
    let result = playRound(playerPick, computerPick);
     console.log(result);

    if (result === 0) {
      console.log("No change in score");
    }else if (result === 1) {
      playerWins = playerWins + result;
      console.log("player:", playerWins, "computer:", computerWins);
    }else {
      computerWins = computerWins + -result;
      console.log("player:", playerWins, "computer:", computerWins);
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