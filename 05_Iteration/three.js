// for-of loop

// Sytnax ->
// for (const element of object) {
    // body
// }

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const item of arr) {
    // console.log(item);
}

const str = "Hello World!"

for (const val of str) {
    // console.log(`Value is ${val}`);
}

// Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} -> ${value}`);
}

const myObject = {
    game1 : "Free Fire",
    game2 : "Coc",
    game3 : "God of War"
}

// console.log(myObject);
// for (const key of myObject) {
    // console.log(key); // object is not iterable
// }

for (const [key, Value] of myObject) {
    console.log(key, '->', Value); // object is not iterable
}
