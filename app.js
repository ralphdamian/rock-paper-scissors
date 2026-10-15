//Function to Randomly generate Rock Paper or Scissors and return it
function getComputerChoice(){
    let num = 0;
    let choice = "";
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

//Function to Get Users choice and return it
function getHumanChoice(){
    //initialite choice and set it to equal an empty string
    let choice = "";
    //Get the choice from the user and store it in choice
    choice = prompt("Rock, Paper, or Scissors?");
    //Return choice
    return choice;
}

//Create 2 Variables to store the players score (humanScore) and the computers score (computerScore) and initiliate them to 0
let humanScore = 0;
let computerScore = 0;

//Function that takes the human and computers choice as arguments and compares them to see who wins and then increments the score of whoever won and rounds played
function playRound (humanChoice, computerChoice){
    //set the human and computer choice to lowercase 
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    //Compare humanChoices to computerChoices
    //if choice is same declare tie and dont increment score, log to console that it was a tie and what the choice was
    if (humanChoice === computerChoice) {
        console.log(`It is a tie! You both chose ${humanChoice}.`);
        return;
    }
    //if human choice is rock and computer choice is paper, log to console that they lose and increment computer score
    if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log(`You Lose! You chose ${humanChoice} and the opponent chose ${computerChoice}`);
        computerScore++;
        return;
    }
    //if human choice is paper and computer choice is scissors, log to console that they lose and increment computer score
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You Lose! You chose ${humanChoice} and the opponent chose ${computerChoice}`);
        computerScore++;
        return;
    }
    //if human choice is scissors and computer choice is rock, log to console that they lose and increment computer score
    if (humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log(`You Lose! You chose ${humanChoice} and the opponent chose ${computerChoice}`);
        computerScore++;
        return;
    }
    //if human choice is rock and computer choice is scissors, log to console that they win and increment human score
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`You Win! You chose ${humanChoice}, and the opponent chose ${computerChoice}`)
        humanScore++;
        return;
    }
    //if human choice is paper and computer choice is rock, log to console that they win and increment human score
    if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`You Win! You chose ${humanChoice}, and the opponent chose ${computerChoice}`)
        humanScore++;
        return;
    }
    //if human choice is scissors and computer choice is paper, log to console that they win and increment human score
    if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`You Win! You chose ${humanChoice}, and the opponent chose ${computerChoice}`)
        humanScore++;
        return;
    }
}
// select each button choice and assign it to a variable
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

// add an event listener to each button that calls play round and passes in the users choice
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});


// //Function that calls playRound 5 times and declares the overall winner after
// function playGame(){
//     //create a loop to play a round 5 times
//     for (let i = 1; i <= 5; i++){
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log(`Amount of rounds played ${i}.`)
//     }
//     //Check who's score is larger and declare a winner
//     //if the players score is higher tell the player they wont and display scores.
//     if (humanScore > computerScore) {
//         console.log(`You are the overall winner! Your score is ${humanScore} and the opponents score is ${computerScore}.`)
//     }
//     //If the computers score is higher tell the player they lost and display scores
//     else if (humanScore < computerScore){
//         console.log(`You lost overall. Your score is ${humanScore} and the opponents score is ${computerScore}.`)
//     }
//     //If both scores are the same declare tie and display scores.
//     else{
//         console.log(`The game is a tie. Your score is ${humanScore} and the opponents score is ${computerScore}.`)
//     }
    
// }

// playGame();
