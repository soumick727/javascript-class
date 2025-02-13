let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you loose!");
        msg.innerText = `you loose! ${compChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";

    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice==="scissors" ? false : true;
        } else{
            //rock, paper
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})