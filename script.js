const btnEle = document.querySelectorAll("button");

const userScoreEle = document.getElementById("user-score");
const compScoreEle = document.getElementById("comp-score");
const resultEle = document.getElementById("result");
const resetBtn = document.getElementById("reset");


let userScore = 0;
let compScore = 0;

btnEle.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("You clicked on", btn.id);
        const computerSelection = compChoice();
        console.log("Computer choice:", computerSelection);
        
        const result = playRound(btn.id, computerSelection);
        console.log(result);
        resultEle.textContent = result;
    });
});

function compChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(userSelection, compSelection) {
    if (userSelection === compSelection) {
        return "It's a tie..!";
    } else if (
        (userSelection === "rock" && compSelection === "scissor") ||
        (userSelection === "paper" && compSelection === "rock") ||
        (userSelection === "scissor" && compSelection === "paper")
    ) {
        userScore++;
        userScoreEle.textContent = userScore;
        return `You won..! ${userSelection} beats ${compSelection}`;
    } else {
        compScore++;
        compScoreEle.textContent = compScore;
        return `You lose..! ${compSelection} beats ${userSelection}`;
    }
}
    // Reset Button Functionality
    resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreEle.textContent = "0";
    compScoreEle.textContent = "0";
    resultEle.textContent = "Result...";
});

