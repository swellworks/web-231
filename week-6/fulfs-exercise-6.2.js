
/*
============================================
; Title:  fulfs-exercise-6.2.js
; Author: Perry Fulfs
; Date:   20 November 2020
; Modified By: Perry Fulfs
; Demonstrates how to create a try/catch/finally block
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Discussion 6.2")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================


/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/
// program to show try...catch in a program


try {
    // variables
    let a = 36
    let b = 3
    const sum = a * b // created a simple multiplication to give wrong sum
  
    // if statement
    if (sum != 136) throw 'Correct sum is not found.' // the sum is not correct & so throws out information.
  
    // output
    console.log(sum)
  } catch (err) {
    console.log('You have not found sum: ' + err)
  } finally {
    console.log('Found the finally...')
  }
  