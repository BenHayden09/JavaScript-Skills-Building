
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// use of comparative operators = use of curly braces

let hour = 2;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} 
else if (hour >= 18 && hour < 23) {
    console.log('Good evening');
}
else
console.log('You should be asleep!');