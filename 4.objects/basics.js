
// purpose of an object is to group relate variables

// We no longer need to declare these
// let radius = 1;
// let x = 1;
// let y = 1;

// Object-orientated Programming (OOP)
// Object contains a function 
//=> no longer called an object function, but an object method

const circle = {
    radius: 1
    location: {
        x: 1,
        y: 1
    },
    isVisible: true
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); // Method
