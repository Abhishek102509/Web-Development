let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    
    let h1 = document.querySelector("h1");
    let getrandom = getRandom();
    h1.innerText=getrandom;
    
    let div = document.querySelector("div");

    div.style.backgroundColor=getRandom;
    console.log("color updated");

})

function getRandom(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    let color = `rgb: ${red},${blue},${green}`;
    return color;
}

