// const Email = "kartik@google"
// const Email = ""
// const Email = []

// if(Email) {
//     console.log("Got user email");
// }else {
//     console.log("Don't hava user email");
// }

// Falsy values
// false, 0, -0, BigInt, "", null, undefined, NaN 

// Truthy values
// "0", 'false', " ", [], {}, function(){}

// const Email = []
// for check Array
// if(Email.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyobj = {}
// // this give array of keys 
// if(Object.keys(emptyobj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator
// let val1;
// val1 = 5 ?? 10
// let val2 = null ?? 15
// let val3 = undefined ?? 15
// first value will assign
let val4 = null ?? 10 ?? 15

// console.log(val4);

// Terniary operator
// Syntax
// condition ? true : false 

const age = 12
age < 18 ? console.log("less than 18") : console.log("Greater than 18");
