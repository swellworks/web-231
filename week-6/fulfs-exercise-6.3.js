
/*
============================================
; Title:  fulfs-exercise-6.3.js
; Author: Perry Fulfs
; Date:   27 November 2020
; Modified By: Perry Fulfs
; Create an object literal for a ticketing system
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 6.3")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================


/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/


// object
const identity = {
  num: 101
}

const profession = {
  job: 'Help Desk Support'
}

const person = {
  firstName: "Bob",
  lastName: "Jones"
}

// output
console.log('id: ' + identity.num + ', ' + 'name: ' + profession.job + ', ' + 'requester: ' + person.firstName + ' ' + person.lastName)