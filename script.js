let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function playGame(){
    for (gameCount = 0; gameCount < 5; gameCount++){    //counts the number of rounds until 5

let randomNumber = Math.floor(Math.random() * 3 + 1);   //picks a random number between 1 and 3
const computerChoice = getComputerChoice();
// console.log(computerChoice);

function getComputerChoice(){   //turns the random number into a string (rock, paper or scissors)
    if(randomNumber == 1){
        return 'rock';
    }
    else if(randomNumber == 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

const humanChoice = getHumanChoice();

function getHumanChoice(){
    let promptChoice = prompt('Make your Choice');  //prompt asking for player input
    return promptChoice.toLowerCase();  //turns input into lower case to be accepted in playRound() function
}
console.log('Human picked: ' + humanChoice);


let result = playRound(humanChoice, computerChoice);


function playRound(humanChoice, computerChoice){    //function to decide the winner each round
    if(humanChoice === computerChoice){
        return "It's a Tie";
    }
    else if((humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')){
        return 'Computer Scores';
    }
    else if((humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')){
        return 'Human Scores';
    }
    else{
        return `${humanChoice} is not a valid entry, try again`;
    }
}

playRound(humanChoice, computerChoice);
console.log(playRound(humanChoice, computerChoice));


function score(){   //function to keep track of the score
    if (result == 'Computer Scores'){
    computerScore++;
    }
    else if(result == 'Human Scores'){
    humanScore++;
    }
}

score();

    }
    function finalScore(){      //returns the winner at the end of 5 rounds
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        if(`${humanScore}` > `${computerScore}`){
            return 'Human Wins!!!';
        }
        else if(`${computerScore}` > `${humanScore}`){
            return 'Computer Wins!';
        }
        else if((`${humanScore}` !== 0 || `${computerScore}` !== 0) && (`${humanScore}` == `${computerScore}`)){
            return "No Winner";
        }
    }
    finalScore();
    
    function reset(){   //resets the count of 3 variables for a new game
        gameCount = 0;
        computerScore = 0;
        humanScore = 0;
        console.log('Game Reset\n Type "playGame()" to play again');
    }
    reset();
}

playGame();