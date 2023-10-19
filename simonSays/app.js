let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); 

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
   
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
}, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
}, 250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    //random btn choose
    gameFlash(randBtn);
}

function checkAns() {
    // console.log("curr level : ", level);

    

    let idx = level-1;

    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            levelUp();
        }
        console.log("same value");
    } else {
        h2.innerText = `Game Over! Press any key to start.`;
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn); // this keyword will be the button which will being pressed
    console.log(this);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}