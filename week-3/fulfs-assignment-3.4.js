/*
============================================
; Title:  fulfs-assignment-3.4.js
; Author: Perry Fulfs
; Date:   7 November 2020
; Modified By: Perry Fulfs
; Description: how to build and invoke functions
===========================================
*/

// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Assignment 3.4")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

/*
  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/*
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

console.log("-- DO THE NUMBERS MATCH GAME --") // adding output header from what is expected

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

let num = 4;

// for loop added from starter code
for (let x = 0; x < 10; x++) {
  x = randomNumber() // letting x = the randomNumber from function provided
  if (match(num, x)) { // if statement let num = 4 and x = a randomly generated number
    logMatch(num, x); // checks to see if the num = 4 does match x = randomNumber
  } else {
    logMismatch(num, x); // checks to see if else the num = 4 does not match x = randomNumber
  }
}

// functions
function match(num, randomNumber) { // Create argument comparing set num.
  if (num === randomNumber) // Boolean === equal to for match or mismatch
    return true
  else
    return false
}

function logMismatch(num, randomNumber) { // Takes 2 arguments & outputs results to console if misMatch.
  console.log(num + " does not match " + randomNumber + "!"); // num = 4
}

function logMatch(num, randomNumber) { // Takes 2 arguments & outputs results to console if match.
  console.log(num + " does match " + randomNumber + "!" ); // num = 4
}

// end program

// NOTE: the code output is similar to what is expected -
// the only confusion was weather this was to output exactly since this is random
// code does show both match and mismatch
