/*
============================================
; Title:  header.js
<<<<<<< HEAD
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: <Your name>
=======
; Author: Professor Krasso
; Date:   28 October 2020
; Modified By: Perry Fulfs
>>>>>>> 2b56963b229f43943105722d871313d08133bcc4
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
<<<<<<< HEAD
* Response: output 
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
	new Date().toLocaleDateString('en-US')

	return output  
=======
* Response: output
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US')

	return output
>>>>>>> 2b56963b229f43943105722d871313d08133bcc4
}
