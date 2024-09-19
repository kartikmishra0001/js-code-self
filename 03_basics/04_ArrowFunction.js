const user = {
    username: "Jack",
    occupation: "Gangster",

    Welcome: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);   
    }
}

// user.Welcome()
// user.username = "Oggy"
// user.Welcome()
// console.log(this);

// Write this in function
// function CartoonCharacter() {
//     console.log(this);    
// }

const CartoonCharacter = function() {
    let heros =  "Ben-10"
    console.log(this.heros);    
}

// CartoonCharacter()

// *************** arrow function
const userName = () => {
    let name = "kartik"
    console.log(this.name);
    console.log(this);
}

// userName()

// Implementation Types
// const addTwoNumber = (num1, num2) => {
//     return num1 + num2
// }

// const addTwoNumber = (num1, num2) => num1 + num2
// const addTwoNumber = (num1, num2) => (num1 + num2)

// const addTwoNumber = (num1, num2) => ({userName: "kartik Mishra"})
// const addTwoNumber = (num1, num2) => ("kartik mishra")

console.log(addTwoNumber(4,44));
