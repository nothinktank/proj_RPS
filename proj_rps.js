
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

let playerScoreBoard = document.querySelector("#p_score");
let computerScoreBoard = document.querySelector("#c_score");

let playerScore = document.querySelector("#playerPoints");
let computerScore = document.querySelector("#computerPoints");
let roundResults = document.querySelector("#roundResult");

let finalResults = document.querySelector("#final");

let totalRoundsPlayed = 0;
let totalPlayerPoints = 0;
let totalComputerPoints = 0;

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
console.log(`you chose ${p}`);
console.log(`computer chose ${c}`);
finalResults.textContent = ``;
  if (p === c){
    console.log("its a tie")
    roundResults.textContent = "its a tie";
return
  }
  switch (c) {
    case "rock":
      if (p === "scissors") {
        computerScore.textContent = `${++totalComputerPoints}`
        roundResults.textContent = "you lose";
      }else{
        playerScore.textContent = `${++totalPlayerPoints}`
        roundResults.textContent = "you win";
      }
      break
    case "paper":
      if (p === "rock") {
        computerScore.textContent = `${++totalComputerPoints}`
        roundResults.textContent = "you lose";
      }else{
        playerScore.textContent = `${++totalPlayerPoints}`
        roundResults.textContent = "you win";
      }
      break
    case "scissors":
      if (p === "paper") {
        computerScore.textContent = `${++totalComputerPoints}`
        roundResults.textContent = "you lose";
      }else{
        playerScore.textContent = `${++totalPlayerPoints}`
        roundResults.textContent = "you win";
      }      
      break
      default:
        break;
  }
  resultTest();
}
   function resultTest(){
    if (totalPlayerPoints > 4){
      finalResults.textContent = "you hit 5 first!"
      totalComputerPoints = 0;
      totalPlayerPoints = 0;
      computerScore.textContent = ``
      playerScore.textContent = ``
    }else if (totalComputerPoints > 4){
      finalResults.textContent = "computer hits 5 first!"
      totalComputerPoints = 0;
      totalPlayerPoints = 0;
      computerScore.textContent = ``
      playerScore.textContent = ``
    } 
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
