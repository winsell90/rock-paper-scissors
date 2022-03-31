function computerPlay(random) {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(random));


function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    accouncement = 'You Win! Rock beats Scissors';
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
     announcement = 'You Lose! Paper beats Rock';
} else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
    announcement = 'Draw!';
} else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    announcement = 'You Lose! Scissors beats paper';
} else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    annoucement = 'You Win! Paper beats rock';
} else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
    announcement = 'Draw!';
} else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
    announcement = 'Draw!';
} else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    announcement = 'You Lose! Rock beats Scissors';
} else (playerSelection != 'Rock' || 'Paper' || 'Scissors') {
    announcement = 'You have made an invalid choice'
}

}

const playerSelection = "Rock";
const computerSelection = computerPlay()
console.log(playRound(playerselection, computerSelection));