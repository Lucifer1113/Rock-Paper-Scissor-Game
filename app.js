const startGameBtn = document.getElementById("start-game-btn");

// startGameBtn.addEventListener('mouseover', function(){
//     startGameBtn.innerHTML = 'My New Button'
//     startGameBtn.style.backgroundColor ='red'
// 
// })
// startGameBtn.addEventListener('mouseout', function(){
//     startGameBtn.innerHTML = 'Start Button'
//     startGameBtn.style.backgroundColor ='green'
// })

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
const COMPUTER_WINS = "YOU LOSE!!";
const PLAYER_WINS = "YOU WINS!!";
const MATCH_DRAW = `IT'S A DRAW!!`;
let gameIsRunning = false;

const getPlayerChoice = () => {
  let selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSOR}?..Use Upper case!`,
    ``
  );
  if(!selection) return alert('invalid ans'); // if user taps cancel

  selection = selection.toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you..!!`);
    return DEFAULT_USER_CHOICE;
  } else {
    return selection;
  }
};

const getComputerChoice = () => {
  const randomValue = Math.random();


  //ternary operator................
  return randomValue < 0.34 ? ROCK : (randomValue < 0.67 ? PAPER : SCISSOR )


//  Using If else statement.........


//   if (randomValue < 0.34) {
//     return ROCK;
//   } else if (randomValue < 0.67) {
//     return PAPER;
//   } else {
//     return SCISSOR;
//   }
};

const getResultOutput = (cChoice, pChoice) => 


// Using Ternary Operator.......................

 cChoice === pChoice
    ? MATCH_DRAW
    : (pChoice === ROCK && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === SCISSOR) ||
      (pChoice === SCISSOR && cChoice === ROCK) ||
      (pChoice === DEFAULT_USER_CHOICE && cChoice === PAPER)
    ? COMPUTER_WINS
    : PLAYER_WINS;




//  Using If else statement.........


  //     if (cChoice === pChoice) {
  //     return MATCH_DRAW;
  //   } else if (
  //     (pChoice === ROCK && cChoice === PAPER) ||
  //     (pChoice === PAPER && cChoice === SCISSOR) ||
  //     (pChoice === SCISSOR && cChoice === ROCK) ||
  //     (pChoice === DEFAULT_USER_CHOICE && cChoice === PAPER)
  //   ) {
  //       return COMPUTER_WINS;
  //   }
  //   else{
  //       return PLAYER_WINS;
  //   }

    
const start = () => {
  if (gameIsRunning) {
      return;
  }
  gameIsRunning = true;
  console.log(`Game is Starting!!`);
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winResult = getResultOutput(computerSelection, playerSelection);
  console.log(`Player's choice is ${playerSelection}`);
  console.log(`Computer's choice is ${computerSelection}`);
  console.log(winResult);
  gameIsRunning = false;
};
startGameBtn.addEventListener("click", start);
