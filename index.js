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

const container = document.querySelector("#container");

function playRound(humanChoice, computerChoice){
    let human = humanChoice;
    let computer = computerChoice;
    const content = document.createElement("div");
    const score = document.createElement("div");
    if(human === computer){
        content.classList.add("content");
        content.textContent = "Tie!";
        container.appendChild(content);

        score.textContent = "Your Score: " + humanScore.toString() + " Computer Score: " + computerScore.toString();
        container.appendChild(score);
    }
    if(human === "rock" && computer === "scissors"){
        content.classList.add("content");
        content.textContent = "You win! Rock beats scissors!";
        container.appendChild(content);
        humanScore += 1
        score.textContent = "Your Score: " + humanScore.toString() + " Computer Score: " + computerScore.toString();
        container.appendChild(score);
    }
    if (human === "paper" && computer === "rock"){
        content.classList.add("content");
        content.textContent = "You win! Paper beats rock!";
        container.appendChild(content);
        humanScore += 1
        score.textContent = "Your Score: " + humanScore.toString() + " Computer Score: " + computerScore.toString();
        container.appendChild(score);
    }
    if (human === "scissors" && computer === "paper"){
        content.classList.add("content");
        content.textContent = "You win! Scissors beats paper!";
        container.appendChild(content);
        humanScore += 1
        score.textContent = "Your Score: " + humanScore.toString() + " Computer Score: " + computerScore.toString();
        container.appendChild(score);
    }
    if (computer === "scissors" && human === "paper"){
        content.classList.add("content");
        content.textContent = "You lose! Scissors beats paper!";
        container.appendChild(content);
        computerScore += 1
        score.textContent = "Your Score: " + humanScore.toString() + " Computer Score: " + computerScore.toString();
        container.appendChild(score);
    }
    if (computer === "paper" && human === "rock"){
        content.classList.add("content");
        content.textContent = "You lose! Paper beats rock!";
        container.appendChild(content);
        computerScore += 1
        score.textContent = "Your Score: " + humanScore.toString() + " Computer Score: " + computerScore.toString();
        container.appendChild(score);
    }
    if (computer === "rock" && human === "scissors"){
        content.classList.add("content");
        content.textContent = "You lose! Rock beats scissors!";
        container.appendChild(content);
        computerScore += 1
        score.textContent = "Your Score: " + humanScore.toString() + " Computer Score: " + computerScore.toString();
        container.appendChild(score);
    }
}

if(humanScore > computerScore){
    console.log("Congrats, you win!")
} else if (humanScore < computerScore){
    console.log("Good try, computer wins!")
} else { console.log("Good try, it's a tie!") ; }


const buttons = document.querySelectorAll("button");

const rock = document.querySelector("#rock");
rock.onclick = playRound;

humanSelection = buttons.id
console.log(humanSelection)

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});