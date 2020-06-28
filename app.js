const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions ${l}, ${w}`);

    rect(l, w, (err, reactagle) => {
        if(err) {
            console.log('ERROR:', err.message);
        }
        else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`)
        }
    });
    console.log('This statement is looged after to call rect()');
}


solveRect(2, 3);
solveRect(4, 8);
solveRect(0, 7);
solveRect(-3, 5);