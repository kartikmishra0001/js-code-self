// *********** Notes ************
/*
    JS Array are Resizeable and can contain mix of different datatype
    JS Array are not fixed size, they can grow or shrink dynamically
    JS Array are ordered collection of elements
    JS Array are Zero indexed
    JS Arrays Copies Operations
    - Shallow copy :- 
        A Shallow copy of an Object is a copy Whose properties References(Point to the same underlying Values)
    - Deep copy :- 
        A Deep copy of an Object is a copy Whose properties do not share the same References(Point to the same underlying Values)
*/


// Arrays

// Simple Number Array
// const MyArray = [0, 1, 2, 4, 9]
// console.log(MyArray[3]);
// console.log(typeof MyArray);

// String Array
// const MyArray2 = ["kartik", "hritik"]
// console.log(MyArray2);
// console.log(typeof MyArray2);

// Mixed Array
// const MyArray3 = [2, 6, 12 , "Noise", "Buds", true]
// console.log(MyArray3);
// console.log(typeof MyArray3);

// ******* Arrays Method ********
// const MyArr = [3, 5, 6, 7, 8]

// ***** push add item in end of the array 
// MyArr.push(99)
// console.log(MyArr);

// ***** pop remove item from the end of an array
// MyArr.pop()
// console.log(MyArr);

// ***** unshift add item in start of an array
// MyArr.unshift(99)
// console.log(MyArr);

// ***** shift remove first item from array
// MyArr.shift()
// console.log(MyArr);

// ***** include check value is in array or not
// console.log(MyArr.includes(7));

// ***** indexof gives the item index that you pass over here
// console.log(MyArr.indexOf(12));

// ***** join basically join two array but they convert these into String array
// const newArray = MyArr.join()
// console.log(MyArr);
// console.log(newArray);

// const newArr = [12, 23, 34, 45, 56, 67]

// ***** Slice return a copy of a selected section
// console.log(" A " , newArr);
// console.log(newArr.slice(1, 3));

// ***** Splice remove From an array
// console.log(" B " , newArr);
// console.log(newArr.splice(1, 3));
// console.log(" C " , newArr);

// const marvel_Heros = [" Hulk " , " Ironman ", " Captain America "]
// const dc_Heros = [" Superman ", " Flash ", " Batman "]
// const Indian_Heros = [" Hanuman "]

// push merge two arrays
// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][0]);

// concat they push arrays into single array
// const Avergers = marvel_Heros.concat(dc_Heros)
// console.log(Avergers);

// second way to add Arrays into array
// this is the best way to add Arrays you can add multiple arrays 
// const Avergers1 = [...marvel_Heros , ...dc_Heros, ...Indian_Heros]
// console.log(Avergers1);

// const Confusing_Array = [2, 3, 4, [12, 23, 34], 122, [32, 432, 5423, [33, 100, 99, 66]]]
// console.log(Confusing_Array);

// flat means convert multiple array into one array 
// but you want to pass how many arrays you want to conver 
// const Confusing_Array2 = Confusing_Array.flat(Infinity);
// console.log(Confusing_Array2);

// check this String are in our existing array or not
// console.log(Array.isArray("kartik"));

// we want to add is into in array
// console.log(Array.from("kartik"));

// but from can't convert key into string
// they give empty string
// console.log(Array.from({name : "kartik"}));

// let score = 100;
// let score2 = 66
// let score3 = 990;

// console.log(Array.of(score, score2, score3));

// ************************************* Arrays Method ************************************
/* You can use it yourself

at
concat
constructor : Array()
copyWithin
entries
every
fill
filter
find
findIndex
findLast
findLastIndex
flat
flatMap
forEach
includes
indexOf
join
keys
lastIndexOf
length
map
pop
push
reduce
reduceRight
reverse
shift
slice
some
sort
splice
toLocaleString
toReversed
toSorted
toSpliced
toString
unshift
values
with
Symbol(Symbol.iterator) : values()
Symbol(Symbol.unscopables) : {at: true, copyWithin: true, entries: true, fill: true, find: true, …
*/