
/*
============================================
; Title:  fulfs-discussion-6.1.js
; Author: Perry Fulfs
; Date:   20 November 2020
; Modified By: Perry Fulfs
; Using ES5 standards and building Array-Like Object collections
===========================================
*/

const header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Discussion 6.1")); //  content with actual name & assignment name

console.log("\n") // adding a space between header & rest of code

// ===========================================


// nested object
let bands = { 
    band_one: 'The Sword', 
    band two: 'Mastadon',
    rocksHard: {
        sword: 80
        mast: 100
    }
}

// accessing property of bands object
console.log(bands.rocksHard); // output - {sword: 80, mast: 100}

// accessing property of rocksHard object
console.log(bands.rocksHard.mast); // output - 100