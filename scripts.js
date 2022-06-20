function computerPlay() {
    let choice = Math.random();
    if (choice < 1/3) {
        return "rock";
    } else if (choice < 2/3) {
        return "paper";
    }
        return "scissors";
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let collection = new Map();
    collection.set(["paper", "scissors"], "lose")
    collection.set(["scissors", "paper"], "win")
    
    collection.set(["paper", "rock"], "win")
    collection.set(["rock", "paper"], "lose")

    collection.set(["rock", "scissors"], "win")
    collection.set(["scissors", "rock"], "lose")
    if (computerSelection == playerSelection) {
        return [0,0,`It's a tie! You both picked ${computerSelection}!`]
    }
    if (collection.get([playerSelection, computerSelection]) == "lose"){
        return [0,1,`You lose! ${computerSelection} beats ${playerSelection}.`]
    } else {
        return [1,0,`You win! ${playerSelection} beats ${computerSelection}.`]
    }
}

function game() {
    let computer = 0, player = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play rock paper scissors! pick one :]");
        let computerSelection = computerPlay();  
        let res = playRound(playerSelection, computerSelection)   
        player += res[0];
        computer += res[1];
        console.log(res[2] + `The score is now ${player} to ${computer}.`);   
    }
    if (player == computer) {
        console.log("It's a total tie!");
    } else if (player > computer) {
        console.log("You won!");
    } else {
        console.log("You lost :(");
    }
    console.log(`The final score was ${player} to ${computer}.`);
}

game();

