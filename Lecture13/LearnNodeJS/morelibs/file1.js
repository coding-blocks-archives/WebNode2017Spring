/**
 * Created by championswimmer on 09/04/17.
 */

let f3 = null;//require('./file3');
let f2 = null;//require('./file2');

//console.log(f3 == f2.f3);


process.nextTick(function () {
    f3 = require('./file3')
});

// process.nextTick(function () {
    f2 = require('./file2')
// });


process.nextTick(function () {
    console.log(f3.increaseCount());
    console.log(f2.f3.increaseCount());
});



