function computerPlay(random) {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection == 'scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
     return 'You Lose! Paper beats Rock';
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Draw!';
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beats paper';
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats rock';
} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return'Draw!';
} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'Draw!';
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors';
} else (playerSelection != 'rock' || 'paper' || 'scissors') 
    return 'Learn how to spell';
}

const playerSelection = window.prompt('Please enter rock, paper or scissors').toLowerCase();
const computerSelection = computerPlay(random)
console.log(playRound(playerSelection, computerSelection));

