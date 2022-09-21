new TypeIt("#myElement", {
}).go();

function getComputerChoice() {
    let random = Math.floor(Math.random() * 9);
    if (random <= 3) {
        random = 'rock';
    }
    else if ((random > 3) && (random <= 6)) {
        random = 'paper';
    }
    else {
        random = 'scissors';
    }
    return random;
}

function playRound(playerChoice, computerSelection) {
    let resultOfGame = '';
    let playerWon = false;
    let computerWon = false;
    if (playerChoice == 'rock'){
        if (computerSelection == 'rock' ) {
            resultOfGame = 'This is an even game';
        }
        else if (computerSelection == 'paper' ) {
            resultOfGame = 'You lose! Paper beats Rock :(';
            computerWon = true;
        }
        else {
            resultOfGame = 'You win! Rock beats Scissor :)';
            playerWon = true;
        }
    }
    else if (playerChoice == 'paper'){
        if (computerSelection == 'rock' ) {
            resultOfGame = 'You win! Paper beats Rock :)';
            playerWon = true;
        }
        else if (computerSelection == 'paper' ) {
            resultOfGame = 'This is an even game';
        }
        else {
            resultOfGame = 'You lose! Scissor beats Paper :(';
            computerWon = true;
        }
    }
    else if (playerChoice == 'scissor') {
        if (computerSelection == 'rock' ) {
            resultOfGame = 'You lose! Rock beats Scissor :(';
            computerWon = true;
        }
        else if (computerSelection == 'paper' ) {
            resultOfGame = 'You win! Scissor beats Paper :)';
            playerWon = true;
        }
        else {
            resultOfGame = 'This is an even game';
        }
    }
    showResult.textContent = resultOfGame;
    if (playerWon == true) {
        return 1;
    }
    else if (computerWon == true) {
        return -1;
    }
    else {
        return 0;
    }
}

function getWinner (playerSelection, computerSelection) {
    whoWon = playRound(playerSelection, computerSelection);
    if (whoWon == 1) {  /* gano el jugador */
        playerWins += 1;
    }
    else if (whoWon == -1) {  /* gana la maquina */
        computerWins += 1;
    }
    else {  /* empate */
        even += 1;
    }
    playerScore.textContent = `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
    return;
}

function isGameOver() {
    return playerWins === 5 || computerWins === 5
}
function showWinner() {
    if (playerWins > computerWins) {
        showScore.textContent = 'Player wins the match!';
    }
    else if (playerWins == computerWins) {
        showScore.textContent = 'This was an even match!';
    }
    else {
        showScore.textContent = 'Computer takes de prize today!';
    }
    setTimeout(resetValues, 6000)
}
function resetValues () {
    countP = 0;
    whoWon = 0;
    playerWins = 0;
    computerWins = 0;
    even = 0;
    showResult.textContent = 'let the game begin';
    playerScore.textContent = 'Player: 0';
    computerScore.textContent = 'Computer: 0';
    showScore.textContent = 'Score';
}
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const showResult = document.querySelector('.show-result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const showScore = document.querySelector('.score-h2');
let countP = 0;
let whoWon = 0;
let playerWins = 0;
let computerWins = 0;
let even = 0;

rockBtn.addEventListener('click', ()=> {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    getWinner(playerSelection, computerSelection);
    if(isGameOver()) {
        showWinner();
    }
});

paperBtn.addEventListener('click', ()=> {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    getWinner(playerSelection, computerSelection);
    if(isGameOver()) {
        showWinner();
    }
});

scissorsBtn.addEventListener('click', ()=> {
    let playerSelection = 'scissor';
    let computerSelection = getComputerChoice();
    getWinner(playerSelection, computerSelection);
    if(isGameOver()) {
        showWinner();
    }
});