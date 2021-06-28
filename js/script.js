let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('input')
const winMsg = document.querySelector('.winner');
const result = document.getElementById('result').innerHTML

function computerPlay(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

/*the game logic (who wins and who loses)*/
function playRound(playerSelection, computerSelection) {
    let computerSelection = computerPlay
    let result = ""
    
    if (playerSelection === computerSelection) {
        result = "Its a Draw"
        return
    }
    if (playerSelection === paper) {
        if (computerSelection == rock) {
            result = "You Win"
            return
        }
        else
            result = "You Lose" 
            return
    }
    if (playerSelection === rock) {
        if (computerSelection == scissors) {
            result = "You Win"
            return
        }
        else
            result = "You Lose"
            return 
    }
    if (playerSelection === scissors) {
        if (computerSelection == rock) {
            result = "You Lose"
            return
        }
        else
            result = "You Win" 
            return
    }
}