"use strict";
// const x: number = 1;
// console.log(x);
// Problem 1 - Hello world
// function person(name: string, age: number){
//     console.log(`age of ${name} is ${age}`);
// }
// person("anas",12);
// Problem 2 - Sum function
// function sum(a: number, b: number){
//     console.log("sum of a and b :" + (a+b));
// }
// sum(34,434);
// Problem 3 - Return true or false based on if a user is 18+
// function isLegal(age: number){
//     if(age >= 18){
//         return true;
//         // console.log("you are legal");
//     }else if(age >= 0 && age <= 18){
//         return false;
//         // console.log("you are not legal");
//     }else{
//         console.log("invalid age");
//     }
// }
// console.log(isLegal(1));
//Problem 4 - Create a function that takes another function as input, and runs it after 1 second.
function runAfter1Second(fn) {
    setTimeout(fn, 5000);
}
runAfter1Second(function () {
    console.log("hii how are you?");
});
