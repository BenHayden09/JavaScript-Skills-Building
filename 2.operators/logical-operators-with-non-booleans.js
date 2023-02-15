//Logical OR continued...

// false||'Ben'
// flase|| 1
// Both would return the string and the number as these are not falsy

// All Falsy values:

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// false||'Ben'
//the first operand is false so it contunes to search to see what the second operand is.
// 'Ben' is not false so it reads it as a Truthy operand

//SHORT-CIRCUITING
// false || 1 || 2
// When returned, the 1 will print.
// Even though the 2 is also not false, the 1 came first, short-circuiting the line.

// How these Logical Operators work with non-boolean values
// CONTEXT: colour choice

let userColour =  'red';
let defultColour = 'blue';
let currentColour = userColour || defultColour;
//userColour OR (||) defultColour
// If we have a userColour this will be used, otherwise it will be defultColour
// use undefined to indicate a non-chosen colour for userColour
//this will return 'blue' as the defult colour
console.log(currentColour);