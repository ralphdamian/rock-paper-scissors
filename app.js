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
    return choice;
}

console.log(`Computer choice is ${getComputerChoice()}`)
//Function to Get Users choice and return it
//Create 2 Variables to store the players score (humanScore) and the computers score (computerScore) and initiliate them to 0
//Function that takes the human and computers choice as arguments and compares them to see who wins and then increments the score of whoever won