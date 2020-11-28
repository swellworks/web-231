
/*
============================================
; Title:  fulfs-discussion-6.1.js
; Author: Perry Fulfs
; Date:   20 November 2020
; Modified By: Perry Fulfs
; Object & Built-in objects using object properties with at least (2) errors  
===========================================
*/

/**

 * Title: Discussion 6.1

 * Author: Ethan Kenneth Winter

 * Date: 26 November 2020

 * Description: Create an object with at least two errors

 */


//creating an object with name value pairs

let dog = { // PF - replace [] need {} to create an object not array

    name: "Bleu",

    age: "13", // PF - missing closing " after 13
    
    breed: "rescue"
};
  
  console.log("My dog's name is " + dog.name + ", he is " + dog.age + " and he is a " + dog.breed + ".")
  
  // expected output "My dog's name is Bleu, he is 13 and he is a rescue."



// ===========================================

/* ORIGINAL

  //creating an object with name value pairs

let dog = [

    name: "Bleu",
  
    age: "13,
  
    breed: "rescue"
  
  ];
  
  
  console.log("My dog's name is " + dog.name + ", he is " + dog.age + " and he is a " + dog.breed + ".")
  
  // expected output "My dog's name is Bleu, he is 13 and he is a rescue."

  */