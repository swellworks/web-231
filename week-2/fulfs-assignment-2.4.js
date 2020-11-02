/*
============================================
; Title:  fulfs-assignment-2.4.js
; Author: Professor Krasso
; Date:   31 October 2020
; Modified By: Perry Fulfs
; Description: how to build and invoke functions
===========================================
*/

// start program

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Assignment 2.4")); // updated content with actual name & assignment name



/*

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

// Creating parameters for the first and last name.
function fullName(firstName, lastName){
  return firstName + " " + lastName;
}

//Calling the function and assigning the return to a variable that is my full name.
var fullName = fullName("Perry", "Fulfs");

// output
console.log('Hello my name is: ' + fullName);

// Creating parameters to output the date.
function todaysDate(){
  return todaysDate;
}
var todaysDate = new Date().toLocaleDateString('en-US'); // Use the

// Creating parameters to output the temperature with formatNumber function.
function temperature(currentTemp){
  return currentTemp;
}
var temperature = 33.56;

// output
console.log('Today\'s date is: ' + todaysDate + ' and the current temperature is ' + temperature.toFixed(1) + " degrees.");

// Creating parameters for my actual age.
function age(myAge){
  return myAge;
}

//Calling the function and assigning the return to a variable that is my current age.
var age = parseInt("51");

// Creating parameters for my savings goal.
function saveGoal(myGoal){
  return myGoal;
}

//Calling the function and assigning the return to a variable of only the first of the savings goals.
var saveGoal = parseFloat("2000 4500 6600");

// output
console.log('I am ' + age + ' years old and my savings account goal is ' + saveGoal + ' dollars.');


// end program
