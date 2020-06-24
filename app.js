const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions ${l}, ${w}`);

    if (l <= 0 || w <=0) {
        console.log(`Rectangle dimensions should be greater then 0
                        the values passed in were: ${l}, ${w};`)
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}` )
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
    }
}

solveRect(2,3);
solveRect(4,8);
solveRect(0,7);
solveRect(-3, 5);