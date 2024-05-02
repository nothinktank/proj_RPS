
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

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let roundResults = document.querySelector("#results")

/*
rockButton.addEventListener("click", ()=>{ console.log("rock has been clicked");
});
*/
let totalRoundsPlayed = 0;

rockButton.addEventListener("click", ()=>{
  playRound(rockButton.textContent, getComputerChoice());
  console.log(`this is round ${++totalRoundsPlayed}`);
} );

paperButton.addEventListener("click", ()=>{
  playRound(paperButton.textContent, getComputerChoice())
  console.log(`this is round ${++totalRoundsPlayed}`);
});
scissorsButton.addEventListener("click", ()=>{
  playRound(scissorsButton.textContent, getComputerChoice())
  console.log(`this is round ${++totalRoundsPlayed}`);
});


function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();
  let result = document.createElement("div");
console.log(`you chose ${p}`);
console.log(`computer chose ${c}`);
  if (p === c){
    console.log("its a tie")
    result.textContent = "its a tie";
  } else if (p === "rock" && c === "paper"){
    console.log("you lose");
    result.textContent = "you lose";
  } else if (p === "rock" && c === "scissors"){
    console.log("you win");
    result.textContent = "you win";
  } else if (p === "paper" && c === "rock"){
    console.log("you win");
    result.textContent = "you win";
  }else if (p === "paper" && c === "scissors"){
    console.log("you lose");
    result.textContent = "you lose";
  }else if (p === "scissors" && c === "paper"){
    console.log("you win");
    result.textContent = "you win";
  }else if (p === "scissors" && c === "rock"){
    console.log("you lose");
    result.textContent = "you lose";
  }
  roundResults.appendChild(result);

  /*
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
*/
}
/*
function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  
  for (let n = 1; n <= 5; n++){
    let playerPick = 
    //let playerPick = prompt("rock, paper, or scissors?");
    let computerPick = getComputerChoice();
    console.log("player:", playerPick, "computer:",computerPick);
    
    let result = playRound(playerPick, computerPick);

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
*/
