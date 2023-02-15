

const person = {
    name: 'Ben',
    age: 34
};

// the key will hold 1 property of the person object - title/key

for (let key in person)
console.log(key, person[key]);

// Dot notation
person.name

// Bracket notation
person['name']

//Used to itterate over an array

const colours = ['red', 'green', 'blue'];

for (let index in colours)
console.log(index, colours [index]);

// cycles through to display index number and then assigned string/value
