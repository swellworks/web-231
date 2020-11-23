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
let composers = [ // Create array-like objects of first/last name, genre, rating.
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

// composers.forEach(function(composer) { // Use a forEach funtion to iterate over the collection.
//   console.log( // Output the results in order keyed in.
//     "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
//   );
// })




let rateName = composers.map(function (rater, index, array) { // Variable  .map to pull the rating of the composer
  return rater.rating;  // Function execution and specifies a value to be returned as rating
});
let compName = composers.map(function (composer, index, array) { // Variable .map to pull the name of the
  return composer.lastName; // Function execution and specifies a value to be returned as last name
});

/* SO CLOSE - I know what I want it to do... I can't see to wrap head around how to get them to fall in line */ 
// rateName.forEach(function(rating) { 
//   console.log(rating)
// });
// compName.forEach(function(lastName) { 
//   console.log(lastName)
// });
/* 
8
10
9
6
5
Beethoven
Mozart
Bach
Haydn
Schubert
*/

console.log("")

console.log("-- COMPOSER BY RATING --");
console.log("Rating: " + rateName + "\n" + "Composer: " + compName); 
// Trying to output as
// Rating: 8
// Composer: Beethoven


let genreComp = composers.map(function (genMusic, index, array) { // Use .map to pull the 
  return genMusic.genre; // Function execution and specifies a value to be returned as genre
});

console.log("")

console.log("-- COMPOSER BY GENRE --");
console.log("Genre: " + genreComp + "\n" + "Composer: " + compName);


/* 
I've tried for hours to get this to work out & I'm quite lost. 
I'll set-up a time to go over this with assignment with you - 
Need a walk through as I'm not grasping the predicate part - the book doesn't help at all
and I've tried tons of different online sources.
*/

// end program




















/* Other type of code to output - didn't work. */
// let adjRatings = composers.map((rate, idx, lName) => { // Use a .map funtion to iterate over the collection.
//   let ratingsObj = { index: idx, rating: rate, lastName: lName};
//   return ratingsObj;
// });
// console.log("-- COMPOSER BY RATING --");
// console.log("Rating: " + composers.rating);
// console.log("Composer: " + composers.lastName);

// console.log("")

// console.log("-- COMPOSER BY GENRE --");
// console.log("Genre: " + composers.genre );
// console.log("Composer: " + composers.lastName);