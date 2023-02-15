
//reference type categories: objects, arrays and functions

//functions perform a task or calculates a value
// inside the curly braces is what we place the body of the function - add statements to define logic of a function
// you do not need to place a semi colon at the end of a function
function hello(){
    console.log('Hello World')
}

hello();

//finctions can have inputs and change the way they are displayed
//to do this you can add a variable after the function name (perameter)
//the perameter is the declaration as the variable following the function name
// the argument is the value that the declaration calls upon

function greet(name){
    console.log('Hello ' + name)
}
greet('Ben');

function secondGreet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName)
}
secondGreet('Ben', 'Hayden');

// using strings and number values in functions

function data(name, age, country){
    console.log('Hello ' + name + ', who is ' + age + ' years old and lives in ' + country)
}
data('Ben Hayden', 34, 'England');
