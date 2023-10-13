// let fruit = ["mango","apple","orange","banana"];
// fruit.push("kela");
// for(let i=fruit.length-1;i>=0;i--){
//     console.log(i,fruit[i]);
// }

let heroes = [["ironman","spider","wanda"],["batman","super","flash"]];

for(let i=0;i<heroes.length;i++){
    console.log(i ,heroes[i],heroes[i].length); // heroes[i].length means how many elements are present in 1st array i.e 3 .
    
    for(let j=0;j<heroes[i].length;j++){
        console.log(`${j}, ${heroes[i][j]}`);
    }
}