//Computers choice
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}

//Players Choice
function playerChoice() {
    let playerChoice = prompt("rock, paper, or scissors?").toLowerCase()
    switch(playerChoice) {
        case 'rock' :
            playerChoice = 'rock'
            break
        case 'paper' :
            playerChoice = 'paper'
            break
        case 'scissors' :
            playerChoice = 'scissors'
            break
    }

    return playerChoice
}


//Play 1 round
function playRound (playerSelection, computerSelection) {

    if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore ++;
        return `You loose! Paper beats Rock! Your score : ${playerScore} Computer Score : ${computerScore}`;
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore ++;
        return `You win! Rock beats scissors! Your score : ${playerScore} Computer Score : ${computerScore}`;
    } else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return `Draw! Try again! Your score : ${playerScore} Computer Score : ${computerScore}`
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore ++;
        return `You win! Paper beats Rock! Your score : ${playerScore} Computer Score : ${computerScore}`;
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore ++;
        return `You loose! Scissors beats paper! Computer Score : ${computerScore}`
    } else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return `Draw! Try again! Your score : ${playerScore} Computer Score : ${computerScore}`;
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore ++;
        return `You loose! Rock beats scissors! Your score : ${playerScore} Computer Score : ${computerScore}`;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore ++;
        return `You win! Scissors beats paper! Your score : ${playerScore} Computer Score : ${computerScore}`
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return `Draw! Try again! Your score : ${playerScore} Computer Score : ${computerScore}`
    } else{
        return `Invalid answer`
    }

}

// const playerSelection = prompt("rock, paper, or scissors?");
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))


let computerScore = 0
let playerScore = 0

for(let i = 0; i < 5; i++){
    let playerSelection = prompt("rock, paper, or scissors?")
    computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    if(playerScore > computerScore){
        return `You won the game!`
    } else{
        return `You lost the game!`
    }
}
