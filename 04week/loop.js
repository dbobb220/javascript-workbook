"use strict";

// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;

do {
    console.log(i);
    i++;
}
while (i <= 100);

/* Create an object (an array with keys and values) called person with the following data:
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"
*/

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

let birthYear = parseInt(person.birthDate.slice(7));

for (let x in person) {
    person[x] === person.birthDate ? console.log(person.birthDate.slice(-4))
    : false;
}

// Create an arrayOfPersons that contains mulitiple objects. 
// You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
    {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    },
    {
    firstName: "John",
    lastName: "Doe",
    birthDate: "Jul 3, 1983",
    gender: "male"
    },
    {
    firstName: "Jack",
    lastName: "Smith",
    birthDate: "Aug 10, 1957",
    gender: "male"
    },
    {
    firstName: "Emily",
    lastName: "Knox",
    birthDate: "Dec 25, 2000",
    gender: "female"
    }
]

// Use .map() to map over the arrayOfPersons and console.log() their information.

arrayOfPersons.map(val => {
    for (let x in val) {
        console.log(val[x]);
    }
});

// Use .filter() to filter the persons array and console.log only males in the array.

arrayOfPersons.filter(val => {
    for (let x in val) {
        val[x] === "male" ? console.log(val) : false;
    }
});



// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

arrayOfPersons.filter(val => {
    for (let x in val) {
        val[x].slice(-4) < 1990 ? console.log(val) : false;
    }
});
