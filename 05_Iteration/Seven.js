const myNum = [2, 23, 34, 45, 56, 76 ,67]

// ************** map
// const num = myNum.map( (num) => num + 10)

// const num = myNum.map( (num) => {
//     return num + 10
// })

const newNum = myNum
                .map((num) => num + 10)
                .map((num) => num * 3)
                .filter((num) => num % 2 == 0)

console.log(newNum);
