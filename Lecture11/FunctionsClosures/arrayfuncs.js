/**
 * Created by championswimmer on 02/04/17.
 */

let arr = [6,5,4,3,2,1];

arr.sort((a,b) => a - b);

var myfunc = function(var1, var2) {
    return var1 + (10 * var2)
}

var myfunc2 = (var1, var2) => var1 + (10 * var2);

var myfunc23 = (var1, var2) => {
    //do something here
    return var1 + (10 * var2)
};

let sqrtarr = arr.map(Math.sqrt);

let mean = arr.reduce((accum, item, index) => (accum * (index) + item) / (index + 1));