
let aArray =  ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    let random = Math.floor(Math.random()*aArray.length)
    let choice = aArray[random]
    return choice
}

var score = 0;
let moves = 0;

let Sscore = document.querySelector('#score');
Sscore.style.cssText = 'color: blue; background: lightblue; font-size: 20px; gap: 10px; margin-top: 10px; margin-bottom: 10px';  
let container = document.querySelector('#container');
container.style.cssText = 'color: brown; font-size: 20px';
function play(playerSelection, computerSelection) {  
    let win = `You Win! ${playerSelection} beats ${computerSelection}`;
    let loose = `You loose! ${computerSelection} beats ${playerSelection}`;
    let tie = `It's a tie, ${playerSelection} equals ${computerSelection}`;
        if(playerSelection == 'Rock' && computerSelection == 'Scissors') {
        score = score + 1;
        Sscore.textContent = 'Score: ' + score;
        return  container.textContent = win;
        } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        score = score + 1;
        Sscore.textContent = 'Score: ' + score;
        return container.textContent = win;
        } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        score = score + 1;
        Sscore.textContent = 'Score: ' + score;
        return container.textContent = win;
        } else if (playerSelection == computerSelection) {
          return container.textContent = tie;
        } else {
        score = score - 1;
        Sscore.textContent = 'Score: ' + score;
        return container.textContent = loose;
       
        } 
}   





const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    
  let playerSelection = button.id;
 let computerSelection = computerPlay();
 play(playerSelection, computerSelection);
 if(score == 5) {
     alert('win')
 } else if (score == -5){
     alert('loss')
 }

  });
});







