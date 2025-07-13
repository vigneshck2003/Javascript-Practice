let prompt = require('prompt-sync')();
/*
Types of loops
1) For loops
2) For in loops
3) For of loops
4) while loops
5) do while loops
*/

// // Question 1: Numbers from 1 to 10
// let userInput = prompt("Enter the value: ");
// console.log("Question1: Numbers from 1 to 10");
// for(let i = 1; i <= userInput; i++){
//     console.log(i);
// }

// //Question 2: Even numbers from 1 to 50
// let input = prompt("Enter a value: ");
// console.log("Question2: Even Numbers from 1 to 50");
// for(let i = 1; i <= input; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// //Question 3: Multiplication table of a number
// let UserInput = prompt("Enter a number: ");
// console.log("Question3: Multiplication Table of a number");
// for(let i = 1; i <= 10; i++){
//     console.log(i, " x ", UserInput, " = ", i*UserInput);
// }

// // Question 4: Print the sum of numbers from 1 to n
// let n = prompt("Enter a number: ");
// let sum = 0
// console.log("Question4: Print the sum of numbers from 1 to n");
// for(let i = 1; i <= n; i++){
//     sum = sum + i
// }
// console.log("Sum is: ", sum)

// // Question 5: Print all odd numbers from n to 1 (reverse oder)
// let userInputN = prompt("Enter a number: ")
// console.log("Question5: Print all odd numbers from n to 1 (reverse oder)")
// for(let i = userInputN; i >= 1; i--){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// Question 6: Factorial of a number
// let fact = 1
// let userInputNum = prompt("Enter a number: ");
// for(let num = 1; num <= userInputNum; num++){
//     fact *= num;
// }
// console.log("Factorial of ", userInputNum, " is: ", fact);

// Question 7: Reverse a number
let reverseNum = 0
let nInput = prompt("Enter a number: ");
console.log(typeof nInput)
while(nInput != 0){

        reverseNum = reverseNum * 10 + (nInput % 10);
        nInput = Math.floor(nInput / 10);
    
}
console.log(reverseNum);
console.log(typeof reverseNum);