let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showResult = (userWin,choiceID,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! Your ${choiceID} beats ${compChoice}`  ;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You Lose ${compChoice} beats Your ${choiceID}`;
        msg.style.backgroundColor = "red";
    }
}

const gameDraw = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw.Play again";
    msg.computedStyleMap.backgroundColor = "#081b31";
}
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const playGame = (choiceID) =>{
      console.log("user choice = ",choiceID);
      const compChoice = genCompChoice();
      console.log("comp choice =",compChoice);

      if(choiceID === compChoice){
        gameDraw();
      }
      else{
        let userWin = true;
        if(choiceID === "rock"){
           userWin =  compChoice === "paper" ?false : true;

        }
        else if (choiceID ==="paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }
        else{
           userWin =  compChoice === "rock"? false :true;
        }
        showResult(userWin,choiceID,compChoice);
      }
}; 
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const choiceID = choice.getAttribute("id");
        // console.log("choice was clicked ",choiceID);
        playGame(choiceID);
    });
});