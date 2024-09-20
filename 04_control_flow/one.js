// if Condition in js

const inUserlogedIn = true

if( 8 != 9) {
    // console.log('not Equal');
}

// OPERATORS 
// <, >, <=, >=, ==, ===, !=, !==

// print both statement because of scope
// temperator = 30
// if(temperator < 50) {
//     console.log('Temperator is less than 50');
// }
// console.log('Temperator is greater than 50');

// this print only true condition
// temperator = 50
// if(temperator <= 50) {
//     console.log('Temperator is less or equal to 50 ');
// }else{
//     console.log('Temperator is greater than 50');
// }
 
// const score = 200
// if(score > 100) {
//     // because power scope only inside the function not outside the function
//     const power = "Fly"
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);

// const balance = 2000
// if(balance > 500) console.log("test");

// const balance = 500
// if(balance <= 500) {
//     console.log("less than or equal to 500");
// }else if(balance <= 750) {
//     console.log("less than or equal 750");
// }else if(balance <= 900) {
//     console.log("less than or equal 900");
// }else {
//     console.log("balance is 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to Acess");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}