function computerPlay() {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gamesPlayed = 0;

let results = document.querySelector('.results');
let round = document.querySelector('.round');
let humanScore = document.querySelector('.humanscore')
let puterScore = document.querySelector('.puterscore')


let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
playRound('rock');
rock.classList.add('clicked');
});

rock.addEventListener('transitionend', removeTransition);
function removeTransition() {
  this.classList.remove('clicked')
}

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  playRound('paper');
  paper.classList.add('clicked');
});

paper.addEventListener('transitionend', removeTransition);
function removeTransition() {
  this.classList.remove('clicked')
}

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  playRound('scissors');
scissors.classList.add('clicked');
});

scissors.addEventListener('transitionend', removeTransition);
function removeTransition() {
  this.classList.remove('clicked');
  this.classList.remove('picked')
}

function computerChoice(computerSelection) {
  switch(computerSelection) {
    case 'rock':
      rock.classList.add('picked');
      break;
    case 'paper':
      paper.classList.add('picked');
      break;
    case 'scissors':
      scissors.classList.add('picked');
      break;
  }
}
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  computerChoice(computerSelection);
  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    ++playerScore;
    ++gamesPlayed;
    results.textContent = 'You win! The computer picked ' + computerSelection + '. ' + `That was round ${gamesPlayed}.`;
    humanScore.textContent = `Human: ${playerScore}`;
    puterScore.textContent = `Computer: ${computerScore}`;
     victoryCondition();

  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    ++computerScore;
    ++gamesPlayed;
    results.textContent = 'You lose! The computer picked ' + computerSelection + '. ' + `That was round ${gamesPlayed}.`;
    humanScore.textContent = `Human: ${playerScore}`;
    puterScore.textContent = `Computer: ${computerScore}`;
     victoryCondition();
     
} else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
  ++gamesPlayed;
  ++ties;
  results.textContent = 'It\'s a tie! The computer picked ' + computerSelection + `. 
     That was tie round ${ties} and game round ${gamesPlayed}.`;
} 
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
    alert(`You win the game! You won ${playerScore} times in ${gamesPlayed} rounds! There were ${ties} ties. Click okay to refresh the page and begin a new game.`) ? '' : location.reload();
  } else if (computerScore >= 5) {
    alert(`You lost the game! The computer won ${computerScore} times in ${gamesPlayed} rounds! There were ${ties} ties. Click okay to refresh the page and begin a new game.`) ? '' : location.reload();
    }
  }




   
  
