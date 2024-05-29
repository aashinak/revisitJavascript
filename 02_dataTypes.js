"use strict"; // treat all js code as newer version

//alert( 3+3 ) // ReferenceError: alert is not defined, only can be used in browser

// console.log(typeof null); //object

// console.log(typeof undefined); //undefined


// let score = "33abc"
// let valInNumber = Number(score)
// console.log(typeof valInNumber); //number
// console.log(valInNumber); //NaN

// let score = null
// let valInNumber = Number(score)
// console.log(typeof valInNumber); //number
// console.log(valInNumber); //0

// let bool = 1
// console.log(Boolean(bool)); // true

// let bool = "hey"
// console.log(Boolean(bool)); // true

// let bool = ""
// console.log(Boolean(bool)); // false

let stringNum = 33
let string = String(stringNum)
console.log(string); // 33 (not "33")
console.log(typeof string);// string (but it is a string in type)



