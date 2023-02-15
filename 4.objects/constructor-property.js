
// Every object in JavaScript has a property called Constructor
// References the function that was used to create that object

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;     // this = reference to the obkect that is executing the piece of code
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);
