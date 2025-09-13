let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");


let turn0 = true;
let count = 0;

const win_pattern = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O"
            turn0=false;
        }
        else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner= checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    })
})
const gamedraw=()=>{
    msg.innerText="game was draw";
    msgcontainer.classList.remove("hide");
    disableboxes();

}
const showwinner=(winner)=>{
    msg.innerText=`congartulation winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disableboxes();
}
const resetgame=()=>{
    turn0=true;
    count =0;
    enableboxes();
    msgcontainer.classList.add("hide");


}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const checkwinner=()=>{
    for(let pattern of win_pattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" || pos2val!="" || pos3val!="")
        if(pos1val===pos2val && pos2val=== pos3val){
            showwinner(pos1val)
            return true;

        }
    }

}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);