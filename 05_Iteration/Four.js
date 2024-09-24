// For-in loop
// Syntax ->
// for (const key in object) {
//     body
// }

const myObject = {
    js : 'Java Script',
    java : 'java',
    cpp : 'c++'
}

for (const key in myObject) {
//    console.log(`${key} -> ${myObject[key]}`);
}

const program = ["js", "java", "py", "ruby", "swift"]
for (const key in program) {
    // console.log(key); // for array index
//    console.log(`Index ${key} -> ${program[key]}`);
}

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

for (const key in map) {
    console.log(`${map[key]}`); // learn later 
}