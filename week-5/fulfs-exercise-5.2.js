/*
============================================
; Title:  fulfs-exercise-5.2.js
; Author: Perry Fulfs
; Date:   20 November 2020
; Modified By: Perry Fulfs
; ES5 Built-in Functions
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 5.2")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

// start program

var foods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi']; // Create array string of foods from expected output.
foods.forEach(function(food) { // Use a forEach funtion to iterate over the collection.
    console.log(food) // Output the foods in order keyed in.
});

// end program

