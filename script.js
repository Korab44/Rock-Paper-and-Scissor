let aArray =  ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    let random = Math.floor(Math.random()*aArray.length)
    let choice = aArray[random]
    return choice
}

function play(playerSelection, computerSelection) {  
    let win = `You Win! ${playerSelection} beats ${computerSelection}`;
    let loose = `You loose! ${computerSelection} beats ${playerSelection}`;
    let tie = `It's a tie, ${playerSelection} equals ${computerSelection}`;
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return win
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return win
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return win
    } else if (playerSelection == computerSelection) {
        return tie
    } else {
        return loose
    }
    
}
// let playerSelection = 'scissors';
let playerSelection = prompt("Rock Paper or Scissor")
playerSelection = aArray.find(element => {
return element.toLowerCase() === playerSelection.toLowerCase();
});

let computerSelection = computerPlay();

console.log(play(playerSelection, computerSelection));
console.log(play(playerSelection, computerSelection));
console.log(play(playerSelection, computerSelection));

function game() {
for (let i = 1; i < 8; i++) {
   console.log(play(playerSelection, computerSelection));
}
}
game();




