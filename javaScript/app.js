// let a=5;
// let b=4;

// console.log(a+b);

// prompt("set your password")

// let msg = "       ha     ";
// console.log(msg);
// console.log(msg.trim());

// let str = "rhrd";

// console.log(str.toUpperCase());

// let msg = "ILoveCoding";
// console.log(msg.indexOf("love"));

// let str = "       hello    ";

// console.log(str.trim().toUpperCase());
// let str = "apple";
// console.log(str[1,4]);

// let students = ["aaaaa", "bbbbbb" , "ggggg"]
// console.log(students);

// let car = ["audi","rr","bmw"];

// car.unshift("lamborghini");
// console.log(car);

// car.shift();
// console.log(car);

// let months = ["janurary","june","march","august"];

// // let days = ["monday","tuesday"];

// console.log(months.splice(0,2,"black","grey"));

// months.shift();
// months.shift();

// months.unshift("june");
// months.unshift("july");
// console.log(months);

// let num = ["monday","tuesday","sunday","wednessday"];
// num.sort(function(a,b){return b-a});
// console.log(num);

// num.sort();
// console.log(num);

// let months = ["janurary","july","march","august","november"];

// months.splice(0,1);
// months.splice(1,3,"june");
// months.splice(0,2,"july","june");
// console.log(months);

// let arr =  ["c","c++","html","javascript","python","java","c#","sql"];
// arr.reverse();
// console.log(arr);

// arr.indexOf("javascript");
// console.log(arr);

// let arr = [7,9,0,-2];
// let n=3;


// let ans = arr.slice(1);
// console.log(ans);

// let str = "aabrcy";
// let idx = 3;

// if(str[idx]==str[idx].toLowerCase()){
//     console.log("lowercase");
// } else {
//     console.log("uppercase");
// }

// let n=prompt("wirte number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n ){
//     console.log(i);
// }

// let a ={1:40,null:98,name:"mohit"};
// console.log(a);

// let stu = {
//     aman:{age:12,city:"delhi"},
//     mohit:{age:1,city:"lko"},
//     nandani:{age:16,city:"mumbai"}
// };
// console.log(stu);
// console.log(stu["aman"]["age"],stu["mohit"]["city"]);

// const stu =[
//     {name:"aman",age:12,city:"delhi"},{name:"mohit",age:1,city:"lko"}
// ];
// console.log(stu[0].age);


// console.log(Math.ceil(Math.random()*10));

// let req =prompt("Enter your number");
// console.log(Math.ceil(Math.random()*req));

// function dice(){
//     let num=6;
//     console.log(Math.ceil(Math.random()*num));
// }

// dice();

// function average(a,b,c){
//     console.log((a+b+c)/3);
// }

// average(1,2,4);
// average(5,7,9);

// function tabel(n){
  
//     for(let i=n;i<=n*10;i=i+n){
//         console.log(i);
//     }
// }
// tabel(9);
function add(n){
    
let sum=0;
for(i=1;i<=n;i++){
    sum=sum+i;
    
}
return sum;

}

