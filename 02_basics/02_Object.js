// Object Literals

// Symbol Implementation
const MySym = Symbol("Keys")

const Student = {
    Name : " kartik Mishra ",
    " College Name " : " XYZ College ",
    State : " Uttar Pradesh ",
    Married : " No ",
    Sex : " Male ",
    Qualification : " Graduate ",

    // Symbol Implementation
    [MySym] : "Keys of house"
}

// console.log(Student.Name);
// console.log(Student[" Father Name "]);

// console.log(Student);

// Display Symbol
// console.log(Student[MySym]);

// You can change details like this
// Student.Name = "Krish 4"
// console.log(Student.Name);

// if you want noone can change your data then use " Freeze "
// they don't show any error but they can't change your data
// if you Write Freeze then you can't create anything in Student Objec 
// Like i create greeting fun if object freeze is in code then we don't create another function
// then we want to comment out it

// Object.freeze(Student)

// Student.Name = " Bahubali "
// console.log(Student.Name);

Student.greeting = function() {
    console.log(" Hello Users ");
}

// this keyword is checking which object name do you want
// We write Student in starting of code this is obj name 
// bcz of Student obj they know Which fun it call

Student.greeting2 = function() {
    console.log(` Hello User ${this.Name}`);
}

// console.log(Student.greeting());
// console.log(Student.greeting2());

// Other part we Cover in next Video