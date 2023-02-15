
// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {        // function instruction to number the total Truthy statements
    let count = 0;                   // begin count from 0
    for (let value of array)
        if (value)
            count++;
        return count;
}
