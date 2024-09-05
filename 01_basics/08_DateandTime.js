// Dates

let  mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let MyCreatedDate = new Date(2023, 2, 32)
// console.log(MyCreatedDate);
let MyCreatedDate = new Date('11-08-2006')
// console.log(`${(MyCreatedDate.toLocaleDateString())} ------ Month/Date/Year`);

let MyTimeStamp = Date.now()
// console.log(MyTimeStamp);
// console.log(MyCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));
 
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday : "long"
})
