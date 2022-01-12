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
let playerSelection = 'scissors';
playerSelection = aArray.find(element => {
return element.toLowerCase() === playerSelection.toLowerCase();
});
let computerSelection = computerPlay();
console.log(play(playerSelection, computerSelection))

function game() {
    for (play = 0; play  < 5; play++) {
    console.log('a')
    }

}

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }
  

// function game() {
//     for (let i = 0; i <= play; i++) {
//         if ((i === 'Rock' && computerSelection === 'Scissors') || (i === 'Scissors' && computerSelection === 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
//           console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//         } else if (i === computerSelection) {
//           console.log(`It's a tie, ${playerSelection} equals ${computerSelection}`);
//         } else {
//           console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
//         }
//       }
//     }

