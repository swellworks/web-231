/*
============================================
; Title: Assignment 1.5
; Author: Perry Fulfs
; Date: 24 October 2020
; Modified By: Perry Fulfs
; Description: Demonstrates Types, Values, and Variables
; payRate to one decimal place and hireDate using "slashes" 
;===========================================
*/ 

// start program ===========================================

// variables
var firstName = 'Vin';
var lastName = 'Diesel';
var address = '2020 End Land, Los Angeles, CA 66677'; // full address
var payRate = 7.25; // output as 7.3
var hireDate = new Date(Date.UTC(2019, 1, 16)); // output as 2/15/2019

// output
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Address: ' + address);
console.log('Pay rate: ' + payRate.toFixed(1));
console.log('Hire Date: ' + hireDate.toLocaleDateString());
// end first person


// variables
var firstName = 'Taylor';
var lastName = 'Swift';
var address = '1989 Sing St, Calabasas, CA 66690'; // full address
var payRate = 8.98; // output as 9.0
var hireDate = new Date(Date.UTC(2019, 3, 20)); // output as 4/19/2019

// output
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Address: ' + address);
console.log('Pay rate: ' + payRate.toFixed(1));
console.log('Hire Date: ' + hireDate.toLocaleDateString());
// end second person


// variables
var firstName = 'Leonardo';
var lastName = 'DiCaprio';
var address = '9080 Celeb Lane, Hollywood, CA 66654'; // full address
var payRate = 10.36; // output as 10.4
var hireDate = new Date(Date.UTC(2019, 10, 6)); // output as 11/5/2019

// output
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Address: ' + address);
console.log('Pay rate: ' + payRate.toFixed(1));
console.log('Hire Date: ' + hireDate.toLocaleDateString());
// end third person

// =========================================== end program

