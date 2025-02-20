// example
// fetch('https://something.com').then().catch().finally()

// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, Network

//     setTimeout(function() {
//         console.log('Async task is completed');
//         resolve();
//     }, 1000)
// })

// // for this we want to resolve also
// promiseOne.then(function() {
//     console.log('Promise consumed');
// })


// // second way to write this
// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task 2');
//         resolve()
//     }, 1000);
// }).then(function() {
//     console.log('Promise2 consumed');
// })

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve({username: "kartik Mishra", age: 18})
//     }, 1000);
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({username: 'Bhisma', age: 121})
//         } else {
//             reject('ERROR: Something error');
//         }
//     }, 1000);
// })

// promiseFour
// .then(function(user) {
//     console.log(user);
//     return user.username
// })
// .then(function(username) {
//     console.log(username);
// })
// .catch(function(error) {
//     console.log(error);
// })
// .finally(() => {
//     console.log("The promise is either resolve or reject");
// })

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: 'Bikas', email: 'bikas@gmail.com'})
        }else {
            reject('ERROR : Something error')
        }
    }, 1000)
})

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function() {
    return Response.json()
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
}) 