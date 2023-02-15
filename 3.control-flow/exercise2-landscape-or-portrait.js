
let number = isLandscape(4, 4);
console.log(number);

function isLandscape(width, height){
    if (width > height) return true;
    else return false;
}

// The above can be tidied up as below
// You DO NOT need to include the True of False statements in your code.
// This is automatically determined
// Ugly if included

console.log(isPortrait(600, 900));
function isPortrait(width, height){
    return (width < height);
    
}