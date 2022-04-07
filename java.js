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
  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    ++playerScore;
    ++gamesPlayed;
    results.textContent = 'You win! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `The first to achieve a score of 5 wins the game. That was round ${gamesPlayed}.`;
     victoryCondition();

  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    ++computerScore;
    ++gamesPlayed;
    results.textContent = 'You lose! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `The first to achieve a score of 5 wins the game. That was round ${gamesPlayed}.`;
     victoryCondition();
     
} else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
  results.textContent = 'It\'s a draw! The computer picked ' + computerSelection + `. 
     Your score is ${playerScore} and the computer's score is ${computerScore}.`;
     round.textContent = `The first to achieve a score of 5 wins the game. That was round ${gamesPlayed}.`;

} else (playerSelection != 'rock' || 'paper' || 'scissors') 
    return 'where are they clicking..?';
}



// below is the loop that plays 5 games for the original console version
// for (; gamesPlayed < 5; ) {
//   const playerSelection = window.prompt('Please enter rock, paper or scissors.').toLowerCase();
//   const computerSelection = computerPlay(random);
//   console.log(playRound(playerSelection, computerSelection));
//   victoryCondition()
// }

function victoryCondition() {
  if (playerScore >= 5) {
    alert(`You win the game! You won ${playerScore} times in ${gamesPlayed} rounds!`);
  } else if (computerScore >= 5) {
    alert(`You lost the game! The computer won ${computerScore} times in ${gamesPlayed} rounds!`);
    }
  }




   
  
