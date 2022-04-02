function computerPlay(random) {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;


function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore;
    ++gamesPlayed;
    return `You Win round ${gamesPlayed}! Your score is ${playerScore} and the computer's is ${computerScore}.`;

  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    ++computerScore;
    ++gamesPlayed;
    return `You Lose round ${gamesPlayed}! Your score is ${playerScore} and the computer's is ${computerScore}.`;
     
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Draw!';

} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    ++computerScore;
    ++gamesPlayed;
    return `You Lose round ${gamesPlayed}! Your score is ${playerScore} and the computer's is ${computerScore}.`;

} else if (playerSelection === 'paper' && computerSelection === 'rock') {
  ++playerScore;
  ++gamesPlayed;
  return `You Win round ${gamesPlayed}! Your score is ${playerScore} and the computer's is ${computerScore}.`;

} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return'Draw!';

} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'Draw!';

} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    ++computerScore;
    ++gamesPlayed;
    return `You Lose round ${gamesPlayed}! Your score is ${playerScore} and the computer's is ${computerScore}.`;

} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
  ++playerScore;
  ++gamesPlayed;
   return `You Win round ${gamesPlayed}! Your score is ${playerScore} and the computer's is ${computerScore}.`;

} else (playerSelection != 'rock' || 'paper' || 'scissors') 
    return 'Learn how to spell.';
}

for (; gamesPlayed < 5; ) {
  const playerSelection = window.prompt('Please enter rock, paper or scissors.').toLowerCase();
  const computerSelection = computerPlay(random);
  console.log(playRound(playerSelection, computerSelection));
  victoryCondition()
}

function victoryCondition() {
  if ((gamesPlayed == 5) && (playerScore > computerScore)) {
    alert(`You beat the computer! You won ${playerScore} out of 5 rounds!`);
  } else if ((gamesPlayed == 5) && (playerScore < computerScore)) {
    alert(`The computer wins! You lost ${computerScore} out of 5 rounds!`);
    }
  }



   
  
