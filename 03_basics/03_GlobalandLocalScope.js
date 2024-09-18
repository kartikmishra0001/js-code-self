// let a = 10;
// const b = 20;
var c = 30;
d = 40;

if(true) {
    let a = 10;
    const b = 20;
    var c = 300;
    d = 400;
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// Therefor programmer don't use "var" or "default" variable in own code

// Nested function scope
// function one() {
//     const username = "kartik mishra"
//     function two() {
//         const Occupation = "Engineer"
//         console.log(username);
//     }
//     two()
//     // console.log(Occupation)
// }
// one()

// if(true) {
//     const username = "kartik Mishra"
//     if(username === "kartik Mishra") {
//         const Occupation = "Engineer"
//         console.log(username);
//     }
//     // console.log(Occupation);
// }

// Implement First type
// we can call this function before of function

console.log(addNumber(5));
function addNumber(num) {
    return num + 1;
}

// but in this function we can't call before the function they throw error
// Implement second type

// console.log(UserAdditionNumber(5));
const UserAdditionNumber = function(num2){
    return num2 + 2;
}
console.log(UserAdditionNumber(5));
