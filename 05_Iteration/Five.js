// For-each loop

const language = ["Java", "Python", "C++", "C", "Java Script"]

// Function in forEach loop
// language.forEach( function (val) {
//     console.log(val);
// } )

// Arrow Function in forEach loop
// language.forEach((item) => {
//     console.log(item);
// })

// this is also valid 
// function print(item) {
//     console.log(item);
// }

// language.forEach(print)

// language.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const CodingLanguage = [
    {
        languageName : 'Java Script',
        languageFileName : 'js'
    },
    {
        languageName : 'Java',
        languageFileName : 'java'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    },
]

CodingLanguage.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
});