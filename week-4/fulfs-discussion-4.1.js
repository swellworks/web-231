/*
============================================
; Title:  fulfs-discussion-4.1.js
; Author: Perry Fulfs
; Date:   10 November 2020
; Modified By: Perry Fulfs
; Description: create an array with 2 errors
===========================================
*/

/*
Adding an element to the beginning of an array using unshift method.
Expected output:
(5) ['Triumph', 'Yamaha', 'Honda', 'Kawasaki', 'Harley Davidson']
*/

// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Discussion 4.1")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code


let motorcycles = ['Yamaha', 'Honda', Kawasaki, 'Harley Davidson'];
motorcycles.unshift['Triumph'];
console.log(motorcycles);

// end program
