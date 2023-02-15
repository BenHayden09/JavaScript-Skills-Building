
// Objects in are dynamic => you can always add new properties or delete them

const circle = {
    radius: 1
};

circle.colour = 'yellow';
circle.draw = function() {}


// Properties can be deleted (remove delete to see the properties in the console again)
delete circle.colour;
delete circle.draw;

console.log(circle);