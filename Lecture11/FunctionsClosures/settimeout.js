/**
 * Created by championswimmer on 02/04/17.
 */

function hello () {
    console.log('Hello World');
}
console.log('Start');
let helloId = setInterval(hello, 1000);

setTimeout(function () {
    clearInterval(helloId);
}, 6000);

