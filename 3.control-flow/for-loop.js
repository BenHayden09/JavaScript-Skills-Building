
// LOOP TYPES:
// for / while / do... while / for... in / for... of

// Example: we want to display text 5 times
// Below is the ugly way

console.log('Hellow World');
console.log('Hellow World');
console.log('Hellow World');
console.log('Hellow World');
console.log('Hellow World');

//You can tidy this up using a For Loop

// for(initialExpression ; condition; incrementExpression)
// i is for the index = loop variable
// loop will run for as long as the condition is True
// the condition states that the index will loop no greater than 5 times (beginning at 0)
// incrementExpression instructs the loop to increase
// So begin loop and loop whilst True to condition, loop no greater than X, increment loop by 1 and repeat
// After the fifth time the loop is incremented by 1.
// The condition reads the sixth time (loop value 5) and recognises Falsy.
// Stops

for (let i = 0; i < 5; i++) {
    console.log('Hello Ben', i);
}
// , i is placed to see the loop expanded along with index value in the console

// After the seventh time the loop is incremented by 1.
// The condition reads the eighth time (loop value 7) and recognises Falsy.
// Stops

for (let i = 0; i < 7; i++) {
    console.log('Hello Maggie');
}

// You can change the starting index value i = 1
// You can also change the comparative expression <= as long as it is less than or equal to
for (let i = 1; i <=5; i++) {
    console.log('Hello Mabel', i);
}

// Display specifc loop numbers
// Check the reminader of division by 2 - if not 0 = odd numbers
for (let i = 1; i <=5; i++) {
    if (i % 2 !==0) console.log('Hello Thomas', i);
}

// If you want to reverse the order change ++ to -- to decrement
// change start number to decrement from
// >= greater or equal to 1
for (let i = 5; i >=1; i--) {
    if (i % 2 !==0) console.log('Hello Clara', i);
}