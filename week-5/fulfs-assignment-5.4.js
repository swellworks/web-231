/*
============================================
; Title:  fulfs-assignment-5.4.js
; Author: Perry Fulfs
; Date:   20 November 2020
; Modified By: Perry Fulfs
; Using ES5 standards and building Array-Like Object collections
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Assignment 5.4")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================

/*
  Expected output:

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
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

composers.forEach(function(composer) { // Use a forEach funtion to iterate over the collection.
  console.log( // Output the results in order keyed in.
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
})


// end program
