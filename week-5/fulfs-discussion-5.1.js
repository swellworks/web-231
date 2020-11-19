/*
============================================
; Title:  fulfs-discussion-5.1.js
; Author: Perry Fulfs
; Date:   10 November 2020
; Modified By: Perry Fulfs
; Description: create a simple JavaScript program using a 
; keyed collection array with at least two (2) errors
===========================================
*/

// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Discussion 5.1")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================

/* 
Expected output:

Key is name, value is My Name.
Key is numbers, value is 666.
Key is truth, value is dare.
*/


let map = new Map([['name', 'My Name'], ['numbers', 666], ['truth' 'dare']])  // Add the constructor to create map objects. 

for (let [key, value] of map.entries) { // Returns a new iterator object that 
    // contains an array of [key, value] for each element in the Map object in insertion order.
  console.log('Key is ' + key + ', value is ' + value + '.'); // Output 3 sentences with a key & a value contained within. 
}

