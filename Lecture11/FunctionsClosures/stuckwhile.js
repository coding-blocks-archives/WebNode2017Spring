/**
 * Created by championswimmer on 02/04/17.
 */

let a = false;

setTimeout(function () {
    a = true;
}, 2000);

while(!a) {
    console.log('Hello');
}

