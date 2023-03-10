
//Divisible by 3 => Fizz
//Divisble by 5 => Buzz
//Divisible by 3 and 5 => fizzBuzz

const output = fizzBuzz(9);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number';
    
    else if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    else if (input % 3 === 0)
        return 'Fizz';
    
    else if (input % 5 === 0)
        return 'Buzz';
    

    return input;
}