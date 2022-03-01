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
        computerScore += 1;
        return 'Paper beats rock.  You lose!';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'Rock beats scissors.  You win!';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'Paper beats rock.  You win!';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'Scissors beats paper.  You lose!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return 'Rock beats scissors.  You lose!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'Scissors beats paper.  You win!';
    } else {
        return 'Invalid play.  Try again.';
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper, or scissors? Enter your play below. (We\'ll play five rounds.)');
        console.log(playRound(playerSelection, computerPlay()));
    }
    if (playerScore === computerScore) {
        console.log(`We tied! ${playerScore} apiece.`);
    } else if (playerScore > computerScore) {
        console.log(`You won this match! ${playerScore} to ${computerScore}`);
    } else {
        console.log(`I won this time. ${computerScore} to ${playerScore}`);
    }
    playerScore = 0;
    computerScore = 0;
}