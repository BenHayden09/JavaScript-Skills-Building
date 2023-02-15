
// There is another equality operator shown through the use of 2 equals signs ==

// Strict equality operator - ensure that both values have the same type and same value
// (Type + Value)
console.log(1 === 1);
// The example belo is false as the types are differnt, one is a string and the other a number
console.log('1' === 1);

// Lose equality operator - this operator reads the first type and then automatically converts the second. Where it is written as a number it is converted to a string without you seeing this.
// (Value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Note: Strict equality operators are used more so becuase they are more acurate.