/*
============================================
; Title:  fulfs-exercise-3.2.js
; Author: Professor Krasso
; Date:   4 November 2020
; Modified By: Perry Fulfs
; Description: how to build and invoke functions
===========================================
*/

// start program

/*
// output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 3.2")); //  content with actual name & assignment name

// Variables for each functions output.
testVar1="Truck";
testVar2="Car";
testVar3="Bike";
testVar4="Bike";
testVar5="Four";
testVar6="Three";


// functions
function match(arg1, arg2) { // Create argument for Truck/Car vars for mismatch.
  if (arg1 === arg2) // Boolean for whether true/false.
    return true
  else
    return false
}

function logMismatch(arg1, arg2) { // Takes 2 arguments & outputs results to console if match.
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) { // Takes 2 arguments & outputs results to console if match.
  console.log(arg1 + " and " + arg2 + " do match!");
}

// ===== Next function ======

function match(arg3, arg4) { // Create argument for Bike/Bike vars for match.
  if (arg3 === arg4) // Boolean for whether true/false.
    return true
  else
    return false
}

function logMismatch(arg3, arg4) { // Takes 2 arguments & outputs results to console if match.
  console.log(arg3 + " and " + arg4 + " do not match!");
}

function logMatch(arg3, arg4) { // Takes 2 arguments & outputs results to console if match.
  console.log(arg3 + " and " + arg4 + " do match!");
}

// ===== Next function ======

function match(arg5, arg6) { // Create argument for Four/Three vars for mismatch.
  if (arg5 === arg6)
    return true
  else
    return false
}

function logMismatch(arg5, arg6) { // Takes 2 arguments & outputs results to console if match.
  console.log(arg5 + " and " + arg6 + " do not match!");
}

function logMatch(arg5, arg6) { // Takes 2 arguments & outputs results to console if match.
  console.log(arg5 + " and " + arg6 + " do match!");
}

// Output from the match() function...
console.log(match("A", "B"));
console.log(match(2,2));
console.log('\n'); // add space between output

// Conditional "if...else" statement. Include checks for all six (6) test variables
 if (match(testVar1, testVar2)) { // Takes 2 variables to check for match/mismatch.
   logMatch(testVar1, testVar2);
 } else {
   logMismatch(testVar1, testVar2); // confirm that vars DON'T match
 }

 if (match(testVar3, testVar4)) { // Takes 2 variables to check for match/mismatch.
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4); // confirm that vars DO match
}

if (match(testVar5, testVar6)) { // Takes 2 variables to check for match/mismatch.
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6); // confirm that vars DON'T match
}

// end program
