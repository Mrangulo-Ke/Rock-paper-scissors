
function computerSelection(){

}

/*the game logic */
function playGame(playerSelection, computerSelection) {
    let results = ''

    if (computerSelection === 'Rock') {
        if (playerSelection === 'Scissors') {
            results = 'You Lose Rock beats Scissors' ;
        } else if (playerSelection === 'Paper') {
            results = 'You Win Paper beats Rock'
        } else {
            results = 'Its a tie'
        }
    } else if (computerSelection === 'Paper') {
        if (playerSelection === 'Scissors') {
            results = 'You Win Scissors beats Paper' ;
        } else if (playerSelection === 'Rock') {
            results = 'You Lose Paper beats Rock'
        } else {
            results = 'Its a tie'
        }
    } else if (computerSelection === 'Scissors') {
        if (playerSelection === 'Rock') {
            results = 'You Win Rock beats Scissors' ;
        } else if (playerSelection === 'Paper') {
            results = 'You Lose Scissors beats Paper'
        } else {
            results = 'Its a tie'
        }
    }

}