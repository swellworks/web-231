/*
============================================
; Title:  fulfs-exercise-4.2.js
; Author: Perry Fulfs
; Date:   10 November 2020
; Modified By: Perry Fulfs
; Description: create an array outputting fruits in order for expected output
===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/


// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 4.2")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================

var fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear']; // Create a string array of 5 fruits.

// function
function getFruit(arr) { // Create function with array parameter.
  for (var k = 0; k < arr.length; k++) { // Use for loop with variable k to put array length (5).
    console.log(arr[k]); // Output the individual elements in order.
  }
}

// output from the getFruit() function
getFruit(fruits); // Call the getFruit function passing in fruits array.


// end program
