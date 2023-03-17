"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log(users);

// #2
// Using filter to create array of user objects with languages
// had issues with this at first because I wasn't using .length to target the language array
let moreThanThreeLangArray = users.filter((user) => {
   return user.languages.length >= 3
});

console.log(moreThanThreeLangArray);

//#3
// Using map, create array of strings where each element is a users email address
//[strings of user emails]

let userEmails = users.map((user) => {
    return users.email = user.email.toString()
});

console.log(userEmails);

//#4
//Using reduce, get total years of experience from users, then calculate average amount of years

// let yearsArr = users.map(function (user){
//     return users.yearsOfExperience = user.yearsOfExperience
// });
// console.log(yearsArr);
//
// let totalYears = yearsArr.reduce(function (accumulator, number){
//     return (accumulator + number) / 5
// });


//Below: doesn't give average but think this is what was expected, average is in commented out code above
let totalYears = users.reduce( (years, user) => {
    return years + user.yearsOfExperience;
}, 0)

console.log(`The average years worked amounts to: ${totalYears} years`);

//#5
//using reduce, get the longest email from the list of users

let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length){
        return user.email;
    } else {
        return longest
    }
}, "")

console.log(longestEmail);

//#6
//Using reduce, get list of user's names in single string
//Example: Your instructors are: name, name, name, name

let instructorList = users.reduce((stringAccum, person) => {
    return stringAccum + person.name.toUpperCase() + " | ";
}, `List of Instructors: `)
console.log(instructorList);