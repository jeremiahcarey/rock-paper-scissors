const playerButtons = document.querySelectorAll('.player-option');
const allButtons = document.querySelectorAll('.play-button');
const computerRockBtn = document.querySelector('#computer-rock');
const computerPaperBtn = document.querySelector('#computer-paper');
const computerScissorsBtn = document.querySelector('#computer-scissors');
const scorePlayer = document.querySelector('#you-score');
const scoreComputer = document.querySelector('#computer-score');
const results = document.querySelector('#print-results');
const endgameModal = document.querySelector('#endgame-modal');
const endgameSummary = document.querySelector('#endgame-text');
const restartBtn = document.querySelector('#restart-btn');

function computerPlay() {
    const play = Math.floor(Math.random() * 3 + 1);
    if (play === 1) {
        computerRockBtn.classList.add('played');
        return 'rock';
    } else if (play === 2) {
        computerPaperBtn.classList.add('played');
        return 'paper';
    } else {
        computerScissorsBtn.classList.add('played');
        return 'scissors';
    }
}

let playerScore = 0;
let computerScore = 0;

function updateScores() {
    scorePlayer.innerText = `  ${playerScore}`;
    scoreComputer.innerText = `  ${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.innerText = `You both chose ${playerSelection}. It's a tie!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        results.innerText = 'Paper beats rock.  You lose!';
        updateScores();
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        results.innerText = 'Rock beats scissors.  You win!';
        updateScores();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        results.innerText = 'Paper beats rock.  You win!';
        updateScores();
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        results.innerText = 'Scissors beats paper.  You lose!';
        updateScores();
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        results.innerText = 'Rock beats scissors.  You lose!';
        updateScores();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        updateScores();
        results.innerText = 'Scissors beats paper.  You win!';
    }
}



function undoPlayed() {
    allButtons.forEach(button => button.classList.remove('played'));
}

function launchModal() {
    endgameModal.style.display = 'block';
    if (computerScore > playerScore) {
        endgameSummary.innerText = `You've lost this match, ${computerScore} to ${playerScore}.  Want a rematch?`;
    } else {
        endgameSummary.innerText = `You won this time, ${playerScore} to ${computerScore}!`;
    }
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    updateScores();
    results.innerText = 'Waiting for play...'
    endgameModal.style.display = 'none';
}

playerButtons.forEach(button => button.addEventListener('click', function (e) {
    e.target.parentElement.classList.add('played');
    playRound(e.target.id, computerPlay());
    const undoPlayDelay = setTimeout(undoPlayed, 1500);
    if (computerScore < 5 && playerScore < 5) return;
    else if (computerScore >= 5 || playerScore >= 5) {
        launchModal();
    }
}));

restartBtn.addEventListener('click', reset);


