function computerPlay(random) {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

let computerSelection = computerPlay(random)

let results = document.querySelector('.results');
let round = document.querySelector('.round');


let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
playRound('rock', computerSelection)
});

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  playRound('paper', computerSelection)
});

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  playRound('scissors', computerSelection)

});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore;
    ++gamesPlayed;
    results.textContent = 'You win! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `That was round ${gamesPlayed}. The first to achieve a score of 5 wins the game.`;

  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    ++computerScore;
    ++gamesPlayed;
    results.textContent = 'You lose! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `That was round ${gamesPlayed}. The first to achieve a score of 5 wins the game.`;
     
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
  alert('It was a Draw! The computer picked ' + computerSelection + `. Your score is ${playerScore} and the computer's score is ${computerScore}.`)

} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    ++computerScore;
    ++gamesPlayed;
    results.textContent = 'You lose! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `That was round ${gamesPlayed}. The first to achieve a score of 5 wins the game.`;

} else if (playerSelection === 'paper' && computerSelection === 'rock') {
  ++playerScore;
  ++gamesPlayed;
  results.textContent = 'You win! The computer picked ' + computerSelection + `. 
      Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `That was round ${gamesPlayed}. The first to achieve a score of 5 wins the game.`;

} else if (playerSelection === 'paper' && computerSelection === 'paper') {
  alert('It was a Draw! The computer picked ' + computerSelection + `. Your score is ${playerScore} and the computer's score is ${computerScore}.`)

} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
  alert('It was a Draw! The computer picked ' + computerSelection + `. Your score is ${playerScore} and the computer's score is ${computerScore}.`)

} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    ++computerScore;
    ++gamesPlayed;
    results.textContent = 'You lose! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `That was round ${gamesPlayed}. The first to achieve a score of 5 wins the game.`;

} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
  ++playerScore;
  ++gamesPlayed;
  results.textContent = 'You win! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `That was round ${gamesPlayed}. The first to achieve a score of 5 wins the game.`;

} else (playerSelection != 'rock' || 'paper' || 'scissors') 
    return 'Learn how to spell.';
}
// below is the loop that plays 5 games for the original console version
// for (; gamesPlayed < 5; ) {
//   const playerSelection = window.prompt('Please enter rock, paper or scissors.').toLowerCase();
//   const computerSelection = computerPlay(random);
//   console.log(playRound(playerSelection, computerSelection));
//   victoryCondition()
// }

function victoryCondition() {
  if ((gamesPlayed == 5) && (playerScore > computerScore)) {
    alert(`You beat the computer! You won ${playerScore} out of 5 rounds!`);
  } else if ((gamesPlayed == 5) && (playerScore < computerScore)) {
    alert(`The computer wins! You lost ${computerScore} out of 5 rounds!`);
    }
  }




   
  
