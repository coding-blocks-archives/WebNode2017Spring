/**
 * Created by championswimmer on 02/04/17.
 */

let a = false;

function printHello () {
    if (!a) {
        console.log('Hello');
    }
}

let helloId = setInterval(printHello, 347);

setTimeout(function () {
    a = true;
}, 6000);