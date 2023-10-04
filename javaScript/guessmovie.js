let favMovie="avatar";
let guess = prompt("guess the movie name");

while(guess!=favMovie && guess!="quit"){
        guess = prompt("wrong : guess again");
}

if(guess ==favMovie){
    console.log(alert("congratulation"));
}