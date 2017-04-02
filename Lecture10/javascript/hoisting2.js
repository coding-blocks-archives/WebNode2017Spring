/**
 * Created by championswimmer on 01/04/17.
 */


const b = 20;
let a = 333;

const obj = {val1: 10, val2: 30};

function myFunc() {
    var b = 20;
    let a = 10;

    if (true) {
        console.log(a);
        var b = 21;

        console.log(a);
        console.log(b);
    }

    console.log(a);
    console.log(b);
}