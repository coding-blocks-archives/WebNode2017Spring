/**
 * Created by championswimmer on 09/04/17.
 */



console.log(this);

global.a = 10;

var fun = function () {
    console.log('fun');
};

function fun1 () {
    console.log('fun1');
}
console.log('Library code execited');

var a = 10;
var b = 20;

module.exports = {
    a,b
};
