let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('#msg-container');
let msg = document.querySelector('#msg');


let turn0 = true; //'playerX', player0

//let arr = ["a","b","c","d"];
//2d array
//let arr2 = [["cat", "bat"],["pig","cow"],["pant","shirt"]];

const WinPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turn0 = true;   
    enableBoxes();
    msgcontainer.classList.add('hide');
}

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log ('box clicked');
        //box.innerText = "hi";
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of WinPatterns) {
        //to print console.log(pattern);
        // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        // console.log([boxes[pattern[0]].innerText], [boxes[pattern[1]].innerText], [boxes[pattern[2]].innerText]);

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "" ){
            if (pos1 == pos2 && pos2 == pos3 ){
                console.log("Winner is " + pos1);  
                console.log("winner",  pos1);
                showWinner(pos1);
            }
        } 
    }
}

//const resetGame = () => {

newgamebtn.addEventListener('click', resetGame);
newresetBtn.addEventListener('click', resetGame);