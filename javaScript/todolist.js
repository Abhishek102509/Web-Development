let todo = ["write"];
let request =prompt("enter your request");

while(true){
    if(request=="quit"){
        console.log("you are quitting");
       break;

    }

    if(request=="list"){
        for(task of todo){
        console.log(task);
       break;
        }
    }

    else if(request=="add"){
       let task =  prompt("please enter your task");
        
        todo.push(task);
        console.log("task added");
        
        
    }

    else if(request == "delete"){
        let idx = prompt("Enter the index number");
        
        todo.splice(idx,1);
        console.log("task removed");
    }



    request= prompt("Enter your request");
}