// Will run forever

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// If you forget to increment i++; then the loop will continue to run a value of 0
// This will forever meet the condition of being below 5
// Resulting in an infinite loop
// The console will conintue to count the number of times that 0 has been returned

// Inifinite loops can happen for other loop types - avoid them and remember to add your increments
