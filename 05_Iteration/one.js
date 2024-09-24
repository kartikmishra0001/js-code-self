const prompt = require("prompt-sync")();
// for loop
// Syntax
// for(initialization, condition, updation) {
// body
// }

// for (let index = 0; index < 20; index++) {
//     console.log(`${index}`);
// }

// for (let index = 0; index < 20; index++) {
//     const element = index
//     if(element == 5) {
//         console.log(`best number : ${element}`);
//     }
//     console.log(`${index}`);
// }

// for(let i=1; i<=10; i++) {
//     for(let j=1; j<=10; j++) {
//         console.log(i +  " * " + j + " = " + i*j);
//     }
// }


// for taking input from the user
// if prompt is not working and show prompt is not defined
// then go to terminal and write (npm install prompt-sync)
// after installing import it like 
// const prompt = require("prompt-sync")();

// const i = prompt("Enter your name: ");
// for(let j = 0; j < 1; j++) {
//     console.log(`Hello buddy ${i}`);
// }

// let myArray = ["flash, batman, superman"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

// break and continue statement

// for(let i=1; i<10; i++) {
//     if(i == 5) {
//         console.log("Detected");
//         break;
//     }
//     console.log(i);
// }

// for(let i=1; i<10; i++) {
//     if(i == 5) {
//         console.log("Detected");
//         continue;
//     }
//     console.log(i);
// }