function getComputerChoice() {
  let randomNumber = Math.floor( Math.random() * 3 )
  let choice;

  if ( randomNumber == 0 ) {
    choice = "rock"
  } else if ( randomNumber == 1 ) {
    choice = "paper"
  } else {
    choice = "scissors"
  }

  console.log(choicei)
  return choice;

}

function getHumanChoice() {
  let choice = prompt("Input your choice (rock, paper, scissors)", "isi woy")
  

  if ( choice == "rock" ) {
    choice = "rock"
  } else if ( choice == "paper" ) {
    choice = "paper"
  } else if ( choice == "scissors" ) {
    choice = "scissors"
  } else {
    console.log("choose the right option!")
  }

  console.log(choice)
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound( humanChoice, computerChoice ) {

  if (humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors" ) {
    return "draw"
  
  } else if (humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "rock" && computerChoice == "scissors" ) {
    humanScore += 1;
    return "Human Win!"

  } else if (computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper" || computerChoice == "rock" && humanChoice == "scissors" ) {
    computerScore += 1;
    return "Computer Win!"

  }

}

playRound(getHumanChoice(), getComputerChoice());


console.log("Human: ", humanScore)

console.log("Computer: ", computerScore)