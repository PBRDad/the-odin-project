function computerPlay(){
    let plays = ["rock",
                "paper",
                "scissors"];
    let selection = Math.floor(Math.random() * plays.length);
    return plays[selection];
}

function playRound(playerSelection, computerSelection){
    let winDeclaration = "";
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") 
    || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")
    || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")){
        winDeclaration = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection + "!";
        return winDeclaration;
    }
    else if (playerSelection.toLowerCase() == computerSelection){
        winDeclaration = "Tie!";
        return winDeclaration;
    }
    else{
        winDeclaration = "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + " beats " + playerSelection.toLowerCase() + "!";
        return winDeclaration;
    }
}

function game(){
    let message = "";
    for (let round = 0; round < 5; round++){
        let playerSelection = prompt("Choose a throw. Rock, paper, or scissors.");
        switch (playerSelection.toLowerCase()){
        case "rock":
        case "paper":
        case "scissors":
                return playRound(playerSelection, computerPlay());
        default:
            round--;
            return "Not a valid throw.";          
        }
    }
}

alert(game());