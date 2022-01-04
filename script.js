function checkForWinRock(selection){

    switch(selection){           
        case "paper":
            console.log("COMPUTER WINS!");
            return "COMPUTER WINS!";
        break;

        case "scisor":
            console.log("PLAYER WINS!");
            return "PLAYER WINS!";
        break;
        }
}

function checkForWinPaper(selection){
    switch(selection){           
        case "rock":
            console.log("PLAYER WINS!");
            return "PLAYER WINS!";
        break;

        case "scisor":
            console.log("COMPUTER WINS!");
            return "COMPUTER WINS!";
        break;
        }
}

function checkForWinScisor(selection){
    switch(selection){           
        case "rock":
            console.log("COMPUTER WINS!");
            return "COMPUTER WINS!";
        break;

        case "paper":
            console.log("PLAYER WINS!");
            return "PLAYER WINS!";
        break;
        }
}

function getRandomInt(range = 3){
    return Math.floor(Math.random() * range);
}

function computerPlay(){
    let randNum = getRandomInt();
    switch(randNum){
        case 0:
            return "rock";
        break;
        case 1:
            return "paper";
        break;
        case 2:
            return "scisor";
        break;
        default:
            return "rock";
        break;
    }
}
function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log("tie!");
        return "tie!";
    }
    else if(playerSelection === "rock"){
        return checkForWinRock(computerSelection);
    }
    else if(playerSelection === "paper"){
        return checkForWinPaper(computerSelection);
    }
    else if(playerSelection === "scisor"){
        return checkForWinScisor(computerSelection);
    }
    
}

let computerScore = 0;
let playerScore = 0;
let result;

while(computerScore != 5 && playerScore !=5){
    let player = prompt("Play rock, paper or scisors!");
    let computer = computerPlay();
    console.log("Computer choses: " + computer);
    console.log("Player choses: " + player);
    result = playRound(player,computer);
    if(result === "tie!")
    {
        continue;
    }
    else if(result === "COMPUTER WINS!")
    {
        computerScore++;
    }
    else if(result === "PLAYER WINS!")
    {
        playerScore++;
    }
}

if(playerScore === 5){
    console.log("PLAYER WINS THE WHOLE GAME!")
}
else{
    console.log("COMPUTER WINS THE WHOLE GAME!")
}

