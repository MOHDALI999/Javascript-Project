let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg =document.querySelector(".msg");
let newgame=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let Player1=prompt("Player1 O Name:");
let Player2=prompt("Player2 X Name:");


let turnO =true;

const startgame =()=>{
    turnO =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


const winPattens=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if(turnO===true)
        {
            
            box.innerText="O";
            box.style.color="#6C6EA0";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#66C7F4";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const Winner = (Winner)=>{
    if(Winner == "O")
    {
        
        msg.innerText=`Congratulation , Winner is ${Player1}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
        
    }
    else{
        boxes.disabled;
        msg.innerText=`Congratulation , Winner is ${Player2}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }
    
}
const checkWinner=()=>{
    for(let pattent of winPattens)
    {
        let pos1Val=boxes[pattent[0]].innerText;
        let pos2Val=boxes[pattent[1]].innerText;
        let pos3Val=boxes[pattent[2]].innerText;  
        if(pos1Val != "" && pos2Val !="" && pos3Val !="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                console.log("Winner",pos1Val);
                Winner(pos1Val);
            }
        }
    }
};

newgame.addEventListener("click",startgame);
reset.addEventListener("click",startgame);