let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('input')


function computerPlay(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

/*the game logic (who wins and who loses)*/
function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = "You win"
    }
    else if (playerSelection == computerSelection) {
        result = "You draw"
    }
    else {
        result = "You lose"
    }
    document.getElementById('result').innerHTML = result
    return
}

//helper functions
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})