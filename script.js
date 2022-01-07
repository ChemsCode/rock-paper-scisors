function checkForWinRock(selection){

    switch(selection){           
        case "paper":
            console.log("COMPUTER WINS!");
            displayWinnerText.textContent = "COMPUTER WINS!";
            return "COMPUTER WINS!";
        break;

        case "scisor":
            console.log("PLAYER WINS!");
            displayWinnerText.textContent = "PLAYER WINS!";
            return "PLAYER WINS!";
        break;
        }
}

function checkForWinPaper(selection){
    switch(selection){           
        case "rock":
            console.log("PLAYER WINS!");
            displayWinnerText.textContent = "PLAYER WINS!";
            return "PLAYER WINS!";
        break;

        case "scisor":
            console.log("COMPUTER WINS!");
            displayWinnerText.textContent = "COMPUTER WINS!";
            return "COMPUTER WINS!";
        break;
        }
}

function checkForWinScisor(selection){
    switch(selection){           
        case "rock":
            console.log("COMPUTER WINS!");
            displayWinnerText.textContent = "COMPUTER WINS!";
            return "COMPUTER WINS!";
        break;

        case "paper":
            console.log("PLAYER WINS!");
            displayWinnerText.textContent = "PLAYER WINS!";
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

function playerChose(){

    rockBtn.addEventListener( 'click', () => {
        return "rock";
    });
    paperBtn.addEventListener( 'click', () => {
        return "paper";
    });
    paperBtn.addEventListener( 'click', () => {
        return "scisor";
    });

}

function playRound(playerSelection, computerSelection){


    if(playerSelection === computerSelection){
        console.log("tie!");
        displayWinnerText.textContent = "tie!";
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

function checkForEnd(){

    result = playRound(player,computer);
    if(result === "COMPUTER WINS!")
    {
    computerScore++;
    displayScoreText.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    }
    else if(result === "PLAYER WINS!")
    {
    playerScore++;
    displayScoreText.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    }
    if(playerScore === 5){
        displayWinnerText.textContent = 'PLAYER WINS THE WHOLE GAME , PRESS TO RESTART!!';
        computerScore = 0;
        playerScore = 0;
        console.log("PLAYER WINS THE WHOLE GAME , PRESS TO RESTART!!")
    }
    else if(computerScore === 5){
        displayWinnerText.textContent = 'COMPUTER WINS THE WHOLE GAME, PRESS TO RESTART!';
        computerScore = 0;
        playerScore = 0;
        console.log("COMPUTER WINS THE WHOLE GAME, PRESS TO RESTART!")
    }

}

let computerScore = 0;
let playerScore = 0;
let result;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scisorBtn = document.querySelector("#scisor");

const displayWinnerContainer = document.querySelector('#displayWinner');
const displayScoreContainer = document.querySelector('#displayScore')

const displayWinnerText = document.createElement('div');
displayWinnerText.textContent = 'Winner';

const displayScoreText = document.createElement('div');
displayScoreText.textContent = `Player ${playerScore} - ${computerScore} Computer`;


displayWinnerContainer.appendChild(displayWinnerText);
displayScoreContainer.appendChild(displayScoreText);

let player;
let computer;

rockBtn.addEventListener( 'click', () => {
    player = "rock";
    computer = computerPlay();
    checkForEnd();
});
paperBtn.addEventListener( 'click', () => {
    player = "paper";
    computer = computerPlay();
    checkForEnd();
});
scisorBtn.addEventListener( 'click', () => {
    player = "scisor";
    computer = computerPlay();
    checkForEnd();
});


