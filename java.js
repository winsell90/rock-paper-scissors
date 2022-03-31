function computerPlay(random) {
  return random[Math.floor(Math.random()*random.length)];
}

let random = ['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(random));