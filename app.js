function computerPlay() {
    const play = Math.floor(Math.random() * 3 + 1);
    if (play === 1) {
        return 'rock';
    } else if (play === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return `You both played ${playerSelection}.  It's a tie!`;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'Paper beats rock.  You lose!';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'Rock beats scissors.  You win!';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'Paper beats rock.  You win!';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'Scissors beats paper.  You lose!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'Rock beats scissors.  You lose!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'Scissors beats paper.  You win!';
    } else {
        return 'Invalid play.  Try again.';
    }
}

    // function game() {
    //     const playerScore = 0;
    //     const computerScore = 0;

    // }