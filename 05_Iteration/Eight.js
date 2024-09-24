// ********** reduce

// const num = [1, 2, 3]
// const myNum = num.reduce( function(acc, curr) {
//     return acc + curr
// }, 0)

// console.log(myNum);

// const num = [1, 2, 3]
// const newNum = num.reduce( (acc, curr) => {
//     return acc + curr
// }, 0)

// console.log(newNum);

const ShoppingCart = [
    {
        item: 'Java Script',
        price: 2999
    },
    {
        item: 'Java',
        price: 1999
    },
    {
        item: 'Python',
        price: 4999
    },
]

const priceToPay = ShoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay);
