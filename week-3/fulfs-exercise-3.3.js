/*
============================================
; Title:  fulfs-exercise-3.3.js
; Author: Professor Krasso
; Date:   5 November 2020
; Modified By: Perry Fulfs
; Description: control statements - replace the series of if...else statements with a switch block
===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// start program


const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 3.3")); //  content with actual name & assignment name

// ===========================================

let eventKeyCode = 13

/* if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
} */

switch (eventKeyCode) { // switch statement eventKeyCode to execute code
  case 13: // start if 13 === The enter key was pressed
    console.log('The enter key was pressed');
    break; // jump to end of switch statement
  case 16: // start if 16 === The shift key was pressed
    console.log('The shift key was pressed');
    break; // jump to end of switch statement
  case 32: // start if 32 === The spacebar key was pressed
    console.log('The spacebar key was pressed');
    break; // jump to end of switch statement
  case 8: // start if 6 === The backspace / delete key was pressed
    console.log('The backspace / delete key was pressed');
    break; // jump to end of switch statement
  default: // start here if no match
    console.log('Unrecognized key')
}

// end program
