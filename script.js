let humanScore = 0;
let computerScore = 0;
let gameCount = 0;
let maxGames = 5;


const logDiv = document.querySelector("#log");
const compC = document.querySelector("#comp");

let humanChoice;

container.addEventListener("click", function(event) {
    if (gameCount <= maxGames){
        gameCount++;
    }
    if (gameCount > maxGames){
        reset();
    }
    if (event.target.tagName === "BUTTON") {
        humanChoice = event.target.id;
        console.log(humanChoice);
        logDiv.textContent = `Human picked ${humanChoice}`;
        winner.textContent = `${finalScore()}`;
    }

let randomNumber = Math.floor(Math.random() * 3 + 1);   //picks a random number between 1 and 3
const computerChoice = getComputerChoice();
console.log(computerChoice);

function getComputerChoice(){   //turns the random number into a string (rock, paper or scissors)
    if(randomNumber == 1){
        return 'rock';
    } else if(randomNumber == 2){
        return 'paper';
    } else{
        return 'scissors';
    }
}
compC.textContent = `Computer picked ${computerChoice}`;

let result = playRound(humanChoice, computerChoice);

function playRound(humanChoice, computerChoice){    //function to decide the winner each round
    if(humanChoice === computerChoice){
        return "It's a Tie";
    } else if((humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')){
        return 'Computer Scores';
    } else if((humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')){
        return 'Human Scores';
    } else{
        return `${humanChoice} is not a valid entry, try again`;
    }
}

playRound(humanChoice, computerChoice);
console.log(playRound(humanChoice, computerChoice));


function score(){   //function to keep track of the score
    if (result == 'Computer Scores'){
    computerScore++;
    } else if(result == 'Human Scores'){
    humanScore++;
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

score();

});

function finalScore(){      //returns the winner at the end of 5 rounds
    if(`${humanScore}` > `${computerScore}` && gameCount == maxGames){
        return 'Human Wins!!!';
    } else if(`${computerScore}` > `${humanScore}` && gameCount == maxGames){
        return 'Computer Wins!';
    } else if((`${humanScore}` !== 0 || `${computerScore}` !== 0) && (`${humanScore}` == `${computerScore}`) && gameCount == maxGames){
        return "No Winner";
    }
}

const winner = document.querySelector("#winner");

finalScore();
function reset(){   //resets the count of 3 variables for a new game
    gameCount = 1;
    computerScore = 0;
    humanScore = 0;
    }