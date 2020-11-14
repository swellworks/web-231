/*
============================================
; Title:  fulfs-exercise-4.3.js
; Author: Perry Fulfs
; Date:   10 November 2020
; Modified By: Perry Fulfs
; Description:  filter and select specific values - adding and iterating over values in an array
===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/



// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 4.3")); //  content with actual name & assignment name

console.log("") // adding a space between header & rest of code

// ===========================================

var vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'] // Variable string of 5 vehicles.

// function
function getValue(arr, val) { // Parameterized array and value to filter.
  for (var k = 0; k < arr.length; k++) { // Iterate over the array.
    if (arr[k] === val) // Use if statement to test the iterated element on the value.
      console.log(arr[k]);
  }
}

// output
console.log("-- DISPLAYING ARRAY ITEMS --");
  for (var x = 0; x < vehicles.length; x++){ // Iterate over the initial array to output all 5 of the vehicles.
    console.log(vehicles[x]);
  }

// new line
console.log("") // Empty string value to create space.

console.log("-- SELECTED VALUE --");
getValue(vehicles, 'Motorcycle'); // Pass in the value of vehicles and specify a value to find.

// new line
console.log("") // Empty string value to create space.

console.log("-- SELECTED VALUE --");
getValue(vehicles, 'Bus'); // Pass in the value of vehicles and specify a value to find.
