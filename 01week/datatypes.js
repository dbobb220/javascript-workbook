'use strict';

// Write a JavaScript program to display the current day and time.
let dateTime = Date();
function displayDateTime() {
    document.getElementById("dateResults").innerHTML = dateTime;
}

// Write a JavaScript program to convert a number to a string.
function numToString(num) {
    document.getElementById("numOutput").innerHTML = num.toString();
}

// Write a JavaScript program to convert a string to the number.
function stringToNum() {
    var a = parseInt(document.getElementById("string").value);
    document.getElementById("stringOutput").innerHTML = a;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
function randomDataType(a) {
    document.getElementById("dataOutput").innerHTML = typeof(a);
}
/*
// Boolean
let randomBoolean = true;
console.log(randomDataType(randomBoolean));

// Null
let randomNull = null; 
console.log(randomDataType(randomNull));

// Undefined
let randomUndefined = undefined;
console.log(randomDataType(randomUndefined));

// Number
let randomNumber = 32;
console.log(randomDataType(randomNumber));

// NaN
let randomNan = NaN;
console.log(randomDataType(randomNan));

// String
let randomString = "Hello World";
console.log(randomDataType(randomString));

*/
// Write a JavaScript program that adds 2 numbers together.

function addTwoNumbers(a , b) {
    var a = parseInt(document.getElementById("first_number").value);
    var b = parseInt(document.getElementById("second_number").value);
    if (a === NaN || b === NaN) {
        document.getElementById("addOutput").innerHTML = "Please ONLY use numbers!";
    } else {
        document.getElementById("addOutput").innerHTML = a + b;
    }
}

// Write a JavaScript program that runs only when 2 things are true.
function twoTrue(a , b) {
    if (a < 10 && b > 15) {
        console.log("These statements are true");
    }
}

twoTrue(5 , 20);

// Write a JavaScript program that runs when 1 of 2 things are true.

function oneTrue(a , b) {
    if (a < 10 || b > 15) {
        console.log("One of these statments is true");
    }
}

twoTrue(100, 20);

// Write a JavaScript program that runs when both things are not true.
function twoFalse(a , b) {
    if (a !== 5 && b !== 'blue') {
        console.log("These statements are false");
    }
}

twoFalse(20 , 'purple');