
// Factory Function
// returns any number of the object without having to duplicate the code to return it
// useful for debugging - rather than having to make multiple changes
// you can make a single change

function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }
    };
}

const cricle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
