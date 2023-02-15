
//Reference types: Objects, arrays and functions

// Object = like an object in real life that holds properties like a person (name, age, height)
//When dealing with multiple, related variables we can out then=m into an object to organise them
// Use curly braces {} for Object Literal

let name ='Ben';
let age = 34;

let person = {
    name: 'Ben', 
    age: 34
};

//with the varaible contained in an object you no longer need to specify them separately above and instead house them within the Object

console.log(person);

// Dot Notation - change the value
// Is easier, shorter and should be defult when changing value
person.name = 'John';
console.log(person.name);

// Bracket Notation
// However, if you do not know the value that the user will select for example the name they will write or the choice from a selection then square brackets should be used
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);