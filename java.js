function computerPlay(random) {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
  alert('rock');
});

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  alert('paper')
});

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  alert('scissors');
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore;
    ++gamesPlayed;
    alert('You win! The computer picked ' + computerSelection + `. 
     You Win round ${gamesPlayed}/5. Your score is ${playerScore} and the computer's score is ${computerScore}.`);

  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    ++computerScore;
    ++gamesPlayed;
    alert('You Lose! The computer picked ' + computerSelection + `. 
     You lose round ${gamesPlayed}/5. Your score is ${playerScore} and the computer's score is ${computerScore}.`);
     
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
  alert('It was a Draw! The computer picked ' + computerSelection + `. Your score is ${playerScore} and the computer's score is ${computerScore}.`)

} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    ++computerScore;
    ++gamesPlayed;
    alert('You Lose! The computer picked ' + computerSelection + `. 
     You lose round ${gamesPlayed}/5. Your score is ${playerScore} and the computer's score is ${computerScore}.`);

} else if (playerSelection === 'paper' && computerSelection === 'rock') {
  ++playerScore;
  ++gamesPlayed;
  alert('You win! The computer picked ' + computerSelection + `. 
   You Win round ${gamesPlayed}/5. Your score is ${playerScore} and the computer's score is ${computerScore}.`);

} else if (playerSelection === 'paper' && computerSelection === 'paper') {
  alert('It was a Draw! The computer picked ' + computerSelection + `. Your score is ${playerScore} and the computer's score is ${computerScore}.`)

} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
  alert('It was a Draw! The computer picked ' + computerSelection + `. Your score is ${playerScore} and the computer's score is ${computerScore}.`)

} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    ++computerScore;
    ++gamesPlayed;
    alert('You Lose! The computer picked ' + computerSelection + `. 
     You lose round ${gamesPlayed}/5. Your score is ${playerScore} and the computer's score is ${computerScore}.`);

} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
  ++playerScore;
  ++gamesPlayed;
  alert('You win! The computer picked ' + computerSelection + `. 
   You Win round ${gamesPlayed}/5. Your score is ${playerScore} and the computer's score is ${computerScore}.`);

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




   
  
