
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    const choice = prompt("Please choose rock, paper, or scissors:");

    return choice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();


        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }


        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }


        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }


        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }


        else {
            console.log(`HOLD THAT L ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }


    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();

    playRound(humanSelection1, computerSelection1);


    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();

    playRound(humanSelection2, computerSelection2);


    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();

    playRound(humanSelection3, computerSelection3);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();

    playRound(humanSelection4, computerSelection4);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();

    playRound(humanSelection5, computerSelection5);


    console.log("Final score:");
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);


    if (humanScore > computerScore) {
        console.log("You won the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();