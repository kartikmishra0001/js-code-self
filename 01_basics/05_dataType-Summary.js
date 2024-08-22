// primitive
// there are 7 types of primitive data types
// int, String, boolean, null, undefined, symbol, bigint

const number_ro = 66;
const nameStudent = "kartik mishra";
const checkMarried = false;
const TempOutside = null;
var userEmail;
const Id = Symbol('66');
const anotherId = Symbol('66');

// console.log(Id != anotherId);
const BigNumber = 4532543542467n;

// console.log(typeof BigNumber);

// non primitive(Reference)
// Arrays, Object, Function

const rollNumberofStudents = [23,43,45,65];
var objOfMyself = {
    name : "kartik mishra",
    age : 21,
    development : "Nothing",
}

let MyFunction = function() {
    // console.log("hello world");  
}

console.log(typeof rollNumberofStudents)
console.log(typeof objOfMyself)
console.log(typeof MyFunction)

// ************************************* about Memory **********************************************

// There are two types of memory 
// 1. Stack Memory (primitive)
// pimitive make copy of data

var myName = "kartik misrha";
var anotherName = myName;
anotherName = "Kartik developer";

// console.log(myName);
// console.log(anotherName);

// 2. Heap Memory (non-primitive)
// but Non-primitive doesn't make copy they pass reference of it

const objForUnderstand = {
    name : "kartik mishra",
    age : 21,
    salary : 312,
}

const obj2 = objForUnderstand;
obj2.name = "Developer";

console.log(objForUnderstand.name);
console.log(obj2.name);