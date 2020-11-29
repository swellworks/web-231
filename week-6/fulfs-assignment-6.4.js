
/*
============================================
; Title:  fulfs-assignment-6.4.js
; Author: Perry Fulfs
; Date:   28 November 2020
; Modified By: Perry Fulfs
; Create Nested object literals for a ticketing system
; create a customer object literal with an array of order object literals
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Assignment 6.4")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================


/*
  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/


// object with nested object
const employee = { // create name for variable
  id: 1, // property id number
  firstName: "Bob", // property
  lastName: "Jones", // property 
  fullName() { // create a method for fullName
    return `${employee.firstName} ${employee.lastName}`; // return expression for fullName
  },
  jobTitle: "(Programmer I)", // property 

  // nested object
  ticket: {
    id: 105, // property id number for the ticket
    ticketName: "Invoice", // property of ticket name
    dateCreated() {
      return new Date().toLocaleDateString('en-US'); // return expression for todays date
    }, 
    priority: "ASAP",
  }
};

// id
// name
// dateCreated
// priority 

// output
console.log('Ticket ' + employee['ticket']['id'] + " was created on " + employee.ticket.dateCreated() + 
' and assigned to employee ' + employee.fullName() + " " + employee.jobTitle + ".");


