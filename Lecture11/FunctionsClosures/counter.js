/**
 * Created by championswimmer on 02/04/17.
 */


function makeCounter (initVal) {
    let val = initVal;
    return {
        increment: function () {
            val++;
            console.log(val)
        },
        decrement: function () {
            val--;
            console.log(val)
        }
    }
}

let counter = makeCounter(10);


