/*
============================================
; Title:  fulfs-exercise-7.2.js
; Author: Perry Fulfs
; Date:   3 December 2020
; Modified By: Perry Fulfs
; Create an employee constructor object with four (4) parameters/fields
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 7.2")); //  content with actual name & assignment name

console.log(" ") // adding a space between header & rest of code

// ===========================================

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

/**
 * Params: id, first name, last name, title
 * Response: void
 * Description: sets the id, name, & title of an object
 */
function Emp(idEmp, first, last, titleEmp) {
  this.id = idEmp;
  this.firstName = first;
  this.lastName = last;
  this.title = titleEmp;
}

// create 5 new objects
const employees = [
  new Emp("003467", "Daniel", "Riviera", "Supervisor"), 
  new Emp("004589", "Jennie", "Lea", "Asst Supervisor"),
  new Emp("008673", "Doug", "Giblets", "Floor Manager"), 
  new Emp("002563", "Ned", "Flanders", "Dock Manager"),
  new Emp("008472", "Melanie", "Boards", "Custodian")
];

/* 
* output 
1. 003467 Daniel Riviera Supervisor
2. 004589 Jennie Lea Asst Supervisor
3. 008673 Doug Giblets Floor Manager
4. 002563 Ned Flanders Dock Manager
5. 008472 Melanie Boards Custodian
*/
  let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(index + '. ' + employees[x].id, employees[x].firstName, 
  employees[x].lastName, employees[x].title) // Looping through an array of objects
  index++
}



    