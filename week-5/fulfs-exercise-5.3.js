/*
============================================
; Title:  fulfs-exercise-5.3.js
; Author: Perry Fulfs
; Date:   20 November 2020
; Modified By: Perry Fulfs
; Using ES5 standards and building Array-Like Object collections
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 5.3")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5

*/

// start program

// object collection
var composers = [ // Create array-like objects of first/last name, genre, rating.
  {
    firstName: "Ludwig van",
    lastName: "Beethoven", 
    genre: "Classical", 
    rating: 8
  },
  {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart", 
    genre: "Classical", 
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach", 
    genre: "Classical", 
    rating: 9
  },
  {
    firstName: "Joesph",
    lastName: "Haydn", 
    genre: "Classical", 
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert", 
    genre: "Classical", 
    rating: 5
  }
]

composers.forEach(function(composer) { // Use a forEach function to iterate over the collection.
  console.log( // Output the results in order keyed in.
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
})


// end program
