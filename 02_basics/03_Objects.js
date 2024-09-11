// Singleton Objects

// Singleton Object
const User = new Object();

// non Singleton object
// const User2 = {}

User.Rollno = "66"
User.Name = "kartik Mishra"
User.Qulification = "12th pass"

// console.log(User);

const regularUser = {
    id : "3445 ", 
    name : "bob",
    username : {
        fullname : {
            firstname : "jack",
            lastname : "mai to papa hu papa iss duniya ka papa"
        }
    }
}

// console.log(regularUser.username.fullname.firstname);
// console.log(regularUser.username.fullname.lastname);

regularUser.username.fullname.display = function() {
    console.log(`My name is ${this.firstname} ${this.lastname}`);
}

// console.log(regularUser.username.fullname.display());

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign(obj1, obj2, obj3)
// const obj5 = Object.assign({}, obj1, obj2)

// const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6);

const user4 = [
    {
        id : "1",
        name : "kk"
    },
    {
        id : "1",
        name : "kk"
    },
    {
        id : "1",
        name : "kk"
    },
    {
        id : "1",
        name : "kk"
    }  
    
]

user4[1].name
// console.log(User);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(User.hasOwnProperty('Name'));

// ******************* destructure

const Course = {
    courseName: "js",
    id: "66",
    courseInstructor: "kartik mishra"
}

// How to call it 
// this is good way but if you want call many time then you write 100 times instead of this we use Destructure
// Course.courseInstructor

// De-Structuring 
// const {courseInstructor} = Course

// we can change it name also
const {courseInstructor: Instructore} = Course

// console.log(courseInstructor);
// console.log(Instructore);

// props
const navbar = (company) => {

}

navbar(company = "kartik tech")

// API concept 
{
    name: "kartik"
}
// in JSON keys and values both are String
// API comes in array form also like that
[
    {},
    {},
    {}
]

// Tools for understanding API
//  * json formatter