/*
============================================
; Title:  fulfs-exercise-2.3.js
; Author: Professor Krasso
; Date:   30 October 2020
; Modified By: Perry Fulfs
; Description: function properties
===========================================
*/

// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 2.3")); // updated content with actual name & assignment name

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// add function properties here
firstName.perry = "Perry"; // Create a function property name with my real first name.
lastName.fulfs = "Fulfs"; // Create a function property name with my real last name.

//function
function firstName() {
  return firstName.perry; // Returns the firstName property from the function above.
}

function lastName() {
  return lastName.fulfs; // Returns the lastName property from the function above.
}

//output
console.log('\n');
console.log("Hello " + firstName() + " " + lastName() + "!" ); // Calling the properties referencing the functions.
// Concatenate the properties together by using the + sign.

// end program
