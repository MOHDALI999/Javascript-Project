let computer=0;
let user=0;

const chocies=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let Userscore=document.querySelector("#userscore");
let Computerscore=document.querySelector("#computerscore");

const computerchoice=()=>{
    const list=["rock","paper","scissor"]
    let idx=Math.floor(Math.random()*3);
    return list[idx];
}
const showWinner = (userWin,userChoice,compChoice)=>{
        if(userWin)
        {
            user++;
            Userscore.innerText=user;
            msg.innerText=`You Win ! ${userChoice} beat ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            computer++;
            Computerscore.innerText=computer;
            msg.innerText=`You Loss ${compChoice} beat ${userChoice}`;
            msg.style.backgroundColor="red";
        }
}
const playGame = (userChoice)=>{
    const compChoice=computerchoice();
    if(userChoice===compChoice)
    {
        msg.innerText="Game Was Draw. Play again.";
        msg.style.backgroundColor="black";   
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
               userWin= compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissor"? false : true;
        }
        else
        {
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin , userChoice,compChoice);
    }
    
}

chocies.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
});
