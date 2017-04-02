/**
 * Created by championswimmer on 02/04/17.
 */

var fun1 = function () {
    // some function
};

function fun2 () {
    // some function
}

const units = 'cm';

function area (unit, i1, i2) {
    let squnits = ' sq. ' + units;
    if (typeof unit === 'string') {
        squnits = ' sq. ' + unit;
    } else {
        i2 = i1;
        i1 = unit;
    }


    if (!i2) {
        return  i1 * i1 + squnits
    }
    return  i1 * i2 + squnits
}

console.log(area(10));
console.log(area(3,4));
console.log(area('m', 20));