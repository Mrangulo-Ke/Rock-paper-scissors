let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('input')


function computerPlay(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

/*the game logic (who wins and who loses)*/
function playRound(playerSelection, computerSelection) {
    let computerSelection = computerPlay
    let result = ''

    if (computerSelection === 'Rock') {
        if (playerSelection === 'Scissors') {
            result = 'You Lose Rock beats Scissors' ;
        } else if (playerSelection === 'Paper') {
            result = 'You Win Paper beats Rock'
        } else {
            result = 'Its a tie'
        }
    } else if (computerSelection === 'Paper') {
        if (playerSelection === 'Scissors') {
            result = 'You Win Scissors beats Paper' ;
        } else if (playerSelection === 'Rock') {
            result = 'You Lose Paper beats Rock'
        } else {
            result = 'Its a tie'
        }
    } else if (computerSelection === 'Scissors') {
        if (playerSelection === 'Rock') {
            result = 'You Win Rock beats Scissors' ;
        } else if (playerSelection === 'Paper') {
            result = 'You Lose Scissors beats Paper'
        } else {
            result = 'Its a tie'
        }
        
    }
    document.getElementById('result').innerHTML = result
    return result
}