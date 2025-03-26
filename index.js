const prompt=require("prompt-sync")({sigint:true});
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let rand = Math.random()
    if(rand <= .333){
        return "rock"
    }
    if(rand <= .666){
        return "paper"
    }
    return "scissors"
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    return humanChoice
}

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if(human === computer){
        console.log("Tie!")
    }
    if(human === "rock" && computer === "scissors"){
        console.log("You win! Rock beats scissors!")
        humanScore += 1
    }
    if (human === "paper" && computer === "rock"){
        console.log("You win! Paper beats rock!")
        humanScore += 1
    }
    if (human === "scissors" && computer === "paper"){
        console.log("You win! Scissors beats paper!")
        humanScore += 1
    }
    if (computer === "scissors" && human === "paper"){
        console.log("You lose! Scissors beats paper!")
        computerScore += 1
    }
    if (computer === "paper" && human === "rock"){
        console.log("You lose! Paper beats rock!")
        computerScore += 1
    }
    if (computer === "rock" && human === "scissors"){
        console.log("You lose! Rock beats scissors!")
        computerScore += 1
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

}

playGame()
console.log(humanScore)
console.log(computerScore)

if(humanScore > computerScore){
    console.log("Congrats, you win!")
} else if (humanScore < computerScore){
    console.log("Good try, computer wins!")
} else { console.log("Good try, it's a tie!") ; }