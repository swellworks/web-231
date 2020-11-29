
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
const identity = { // add a variable name to property num/number string
  num: 392097
}

const profession = { // add a variable name to property job
  job: 'Entry Level Associate'
}

const person = { // add a variable name to property first/last name
  firstName: "Janice",
  lastName: "Lamb"
}

// output all the objects into one concatenated string
console.log('id: ' + identity.num + ', ' + 'name: ' + profession.job + ', ' +
 'requester: ' + person.firstName + ' ' + person.lastName);



