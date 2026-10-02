//Function to Randomly generate Rock Paper or Scissors and return it
function getComputerChoice(){
    let num = 0;
    let choice;
    // Get random number from 1 to 3 to map to rock paper scissors
    num = Math.floor(Math.random() * 3) + 1;
    //Map the number to rock paper or scissors
    switch (num) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;

    }
    //Return the choice
    return choice;
}

console.log(`Computer choice is ${getComputerChoice()}`)

//Function to Get Users choice and return it
function getHumanChoice(){
    //initialite choice and set it to equal an empty string
    let choice = "";
    //Get the choice from the user and store it in choice
    choice = prompt("Rock, Paper, or Scissors?");
    //Return choice
    return choice;
}
console.log(`Humans choice is ${getHumanChoice()}`)
//Create 2 Variables to store the players score (humanScore) and the computers score (computerScore) and initiliate them to 0
let humanScore = 0;
let computerScore = 0;
//Function that takes the human and computers choice as arguments and compares them to see who wins and then increments the score of whoever won and rounds played
function playRound (humanChoice, computerChoice){
    //set the human and computer choice to lowercase 
    let humanChoice = humanChoice.toLowerCase();
    let computerChoice = computerChoice.toLowerCase();
    //Compare humanChoices to computerChoices
    //if choice is same declare tie and dont increment score, log to console that it was a tie and what the choice was
    if (humanChoice === computerChoice) {
        console.log(`It is a tie! You both chose ${humanChoice}.`);
    }
    //if human choice is rock and computer choice is paper, log to console that they lose and increment computer score
    if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log(`You Lose! You chose ${humanChoice} and the opponent chose ${computerChoice}`);
        computerScore++;
        return computerScore;
    }
    //if human choice is paper and computer choice is scissors, log to console that they lose and increment computer score
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You Lose! You chose ${humanChoice} and the opponent chose ${computerChoice}`);
        computerScore++;
        return computerScore;
    }
    //if human choice is scissors and computer choice is rock, log to console that they lose and increment computer score
    if (humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log(`You Lose! You chose ${humanChoice} and the opponent chose ${computerChoice}`);
        computerScore++;
        return computerScore;
    }
    //if human choice is rock and computer choice is scissors, log to console that they win and increment human score
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`You Win! You chose ${humanChoice}, and the opponent chose ${computerChoice}`)
        humanScore++;
        return humanScore;
    }
    //if human choice is paper and computer choice is rock, log to console that they win and increment human score
    if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`You Win! You chose ${humanChoice}, and the opponent chose ${computerChoice}`)
        humanScore++;
        return humanScore;
    }
    //if human choice is scissors and computer choice is paper, log to console that they win and increment human score
    if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`You Win! You chose ${humanChoice}, and the opponent chose ${computerChoice}`)
        humanScore++;
        return humanScore;
    }
    


}