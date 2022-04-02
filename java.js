function computerPlay(random) {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection == 'scissors') {
    console.log('You Win!');
    return playerScore += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You Lose!');
     return computerScore += 1;
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Draw!';
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
  console.log('You Lose!');
    return computerScore += 1;
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
  console.log('You Win!');
    return playerScore += 1;
} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return'Draw!';
} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'Draw!';
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
  console.log('You Lose!');
    return computerScore += 1;
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
  console.log('You Win!');
  return playerScore += 1;
} else (playerSelection != 'rock' || 'paper' || 'scissors') 
    return 'Learn how to spell';
}

const playerSelection = window.prompt('Please enter rock, paper or scissors').toLowerCase();
const computerSelection = computerPlay(random);
console.log(playRound(playerSelection, computerSelection));


   
  
