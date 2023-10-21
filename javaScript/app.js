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
// function add(n){
    
// let sum=0;
// for(i=1;i<=n;i++){
//     sum=sum+i;
    
// }
// return sum;

// }

// let odd= function(n){
//     console.log(n%2!=0);
// }
// odd(6);

// let country= ["australia fbbbbbbbbb uuyyu kghyg h","germany","United states of america"];

// if((country[0].length>country[1].length) && (country[0].length>country[2].length)){
//     console.log(country[0]);
// }
// else if((country[1].length>country[0].length) && (country[1].length>country[2].length)){
//     console.log(country[1]);
// }
// else{
//     console.log(country[2]);
// }


//  arr = [1,2,3,4,5,6,7,8,9];
// let num = 6;

// for(let i=1;i<=arr.length;i++){
//     if(num<arr[i]){
//         console.log(i);
//     }
//     else{
//         console.log("no number");
//     }let
// }
// let start=100;
// let end=200;

// function generate (start,end){
//     let diff=end-start;
// console.log(generate(100,200));

// const sum =(a,b)=>{
//     console.log(a+b);
// };
// sum(9,8);

// console.log("hi there");
// setTimeout(function str(){console.log("aona")},4000);

// console.log("wecome to");

// const pow=(n)=>n*n;
// console.log(pow(6));

// let arrayAverage=(a,b,c) => {
// return (a+b+c)/3;
// }
// console.log(arrayAverage(40,40,49));

// let isEven=(n)=>{
// if(n%2==0){
//      return "even";
// } else {
//     return "odd";
// }
// };
// console.log(isEven(5));


// const isEven =(num)=>num%2==0;
// console.log(isEven(4));


// const object = {
//     message:'hello world!',

//     logMessage(){
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);

// let arr =[1,2,3,4,5];

// let print = function (el) {
//   return el*2;
// };
// let a =arr.map(print);
// console.log(a);
// console.log(arr);

// let arr =[9,3,7];

// let a=arr.some((el) => (el%2==0));
// console.log(a);

// let arr = [1,2,3,4];
// let mul = arr.reduce((res,el)=>(res*el));

// console.log(mul);
// let arr = [10,40,70,20,50];
// let mul = arr.reduce((acc ,el)=>{
//     if(el<acc){
//         return el;
//     }else {
//         return acc;
//     }
// });

// console.log(mul);

// let arr=[1,2,3,-1];
//  console.log(Math.max.,(...arr));

// function sum(...arg){
//     for(let i = 0;i<arg.length;i++){
//         console.log()
//     }
// }

// let arr=["tony","stark","mavvyt","tgahsg"];
// let [a,b,c]=arr;
// console.log(a,b,c);

// const student = {
//     name:"karan",
//     age:14,
//     class:9,
//     username:"karan@12345",
//     password:"abcd"
// };

// let{username:user,password,city="mumbai"}=student;
// console.log(user,password,city);

// let arr = ["dog","cow","goat","horse"];

// let n = arr.map(function (el){
// return el.toUpperCase() ;
// });

// console.log(n);

// Setting up the promises

// function savetoDb(data, sucess, failure){
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if(internetSpeed > 4) {
//         sucess();

//     } else {
//         failure();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("sucess : your data was saved");
//     savetoDb( "hello world", () => {
//         console.log("sucess2 : data2 saved");
//         savetoDb( "mohit", () => {
//             console.log("sucess3 : data3 saved");
//         },
//         () => {
//             console.log("failure3: weak connection");
//         });
//     },
//     () => {
//         console.log("failure2 : weak connection");
//     });
// },
//  () => {
//     console.log("failure3 : weak connection");
//  });

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was completed");
});