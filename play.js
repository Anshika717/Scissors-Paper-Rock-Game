let myscore=0;
let compscore=0;

let choice=document.querySelectorAll(".pattern");
let msg=document.querySelector("#asktoplay");
let userScore= document.querySelector("#myscoreval");
let compScore= document.querySelector("#compscoreval");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const draw=()=>{
    console.log("Its a draw!! You both have same choices");
    msg.innerText = "Its a Draw!!";
    msg.style.backgroundColor= "black";
};

const Winner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        console.log("Yayyy! You Won!!");
        msg.innerText = `You Wonn!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
        myscore++;
        userScore.innerText= myscore;
    }
    else{
        console.log("Oops! You lost!!");
        msg.innerText = `You lose!! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
        compscore++;
        compScore.innerText= compscore;
    };
};

const playGame=(userChoice)=>{
    console.log("userchoice is",userChoice);
    const compChoice= genCompChoice();
    console.log("Compchoice is",compChoice);

    if(userChoice===compChoice){
        draw();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="scissors" ? true : false;
        } 
        else if(userChoice==="paper") {
            userWin= compChoice==="rock" ? true : false;
        }
        else {
            userWin= compChoice==="paper" ? true : false;
        }
        Winner(userWin,compChoice,userChoice);
    };
};

choice.forEach((pattern) => {
    pattern.addEventListener("click", ()=>{
        const userChoice= pattern.getAttribute("id");
        playGame(userChoice);
    });
});
