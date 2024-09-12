// function CalculateCartPrice(num1) {
//     return num1;
// }

// if you don't how much item does costumer purchase then use (rest operator)
// function CalculateCartPrice(...num1) {
//     return num1;
// }

function CalculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(CalculateCartPrice(100, 2000, 300, 432));

const user = {
    username: "kartik",
    age: 25,
    occupation: "Software Engineer",
    sex: "male"
}

function HandleObject(AnyUser) {
    if(AnyUser.sex === "Male" || AnyUser.sex === "male") {
        return `Username is ${AnyUser.username} and her age is ${AnyUser.age} and Occupation is ${AnyUser.occupation}`
    }
    return `Username is ${AnyUser.username} and his age is ${AnyUser.age} and Occupation is ${AnyUser.occupation}`
}

// console.log(HandleObject(user));

HandleObject ({
    username: "Princes",
    age: 18,
    occupation: "Software Engineer",
    sex: "Female"
})

const MynewArray = [200, 23, 234, 345]

function ReturnSecondValue(getArray) {
    return getArray[1];
}

// console.log(ReturnSecondValue(MynewArray));
// console.log(ReturnSecondValue([234,5234,34523,234]));

