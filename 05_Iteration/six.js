// const coding = ["Js", "Java", "Python", "Ruby", "Cpp", "C"]

// ************* for-each loop
// const value = coding.forEach( (lan) => {
//     console.log(lan);

//     // IN for each loope we can't return 
//     // return lan;
// } )

// console.log(value);

// ************* filter
// const coding = [1, 3, 4, 5, 6, 7, 8, 98]

// First way to write
// if you write in one line then don't need to write return statement otherwise you wan't to write
// const cd = coding.filter( (num) => num )

// Second way to write
// const cd = coding.filter( (num) => {
//     return num > 4;
// })
// console.log(cd);

// const Mynum = [1, 3, 4, 5, 6, 7, 8, 98]

// const newNum = []

// Mynum.forEach( (num) => {
//     if(num > 4) {
//         newNum.push(num);
//     }
// })

// console.log(newNum);

const book = [
    {title:'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title:'Book Two', genre: 'Non-Fiction', publish: 1991, edition: 2007},
    {title:'Book Three', genre: 'History', publish: 1999, edition: 2005},
    {title:'Book Four', genre: 'Non-Fiction', publish: 2003, edition: 2013},
    {title:'Book Five', genre: 'Science', publish: 1967, edition: 1989},
    {title:'Book Six', genre: 'Fiction', publish: 1987, edition: 2005},
    {title:'Book Seven', genre: 'History', publish: 2001, edition: 2014},
    {title:'Book Eight', genre: 'Science', publish: 1980, edition: 2007},
    {title:'Book Nine', genre: 'Non-Fiction', publish: 1988, edition: 2005},
]

let userbook = book.filter( (bk) => {
    return bk.genre === 'History'
})

userbook = book.filter( (bk) => bk.edition >= 2000)

console.log(userbook);

