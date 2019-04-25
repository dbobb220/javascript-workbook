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
console.log(typeof birthYear);

for (let x in person) {
    if (birthYear % 2 === 0) {
        console.log(person.birthDate)
    }
}