// console.log("K");
// console.log("A");
// console.log("R");
// console.log("T");
// console.log("I");
// console.log("K");

// function Myname() {
//     console.log("K");
//     console.log("A");
//     console.log("R");
//     console.log("T");
//     console.log("I");
//     console.log("K");
// }

// Reference
// Myname

// Execution
// Myname()

// Make a function to add two add two number
// first way to implementation
// function add(number1, number2) {
//     console.log(number1 + number2);
// }

// add(4,6);

// second way to implementation
// function add(number1, number2) {
//     console.log(number1 + number2);
// }

// result can't print this value
// let result = add(54,23)
// console.log(result)

// third way to implementation
// function add(number1, number2) {
    // let result = number1 + number2;
    // return result

//     return number1 + number2
// }

// const result = add(34,534)
// console.log(result);

function loginusername(username = "User") { // we pass custom name also ( username = "user")
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusername("kartik Mishra"));

// if empty string is passed
// console.log(loginusername(""));

// if no string is pass
// console.log(loginusername());
