/*
============================================
; Title:  fulfs-assignment-4.4.js
; Author: Perry Fulfs
; Date:   10 November 2020
; Modified By: Perry Fulfs
; Description: create an array outputting fruits in order for expected output
===========================================
*/

// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Assignment 4.4")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================

/*

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

let states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada']; // Create a string array of 5 states.

function getState(x, y) { // Parameterized array and value to filter.
  for (x = 0; x < states.length; x++) {
    // if (states[x] < y) // Use if statement to test the iterated element on the value.
    console.log(states[x]);
  }
}

console.log("-- ORIGINAL ARRAY --") // Adding output header from what is expected.

getState();

// new line
console.log("") // Empty string value to create space.

console.log("-- SORTED ARRAY --") // Adding output header from what is expected.

console.log(states.sort());


// end program
