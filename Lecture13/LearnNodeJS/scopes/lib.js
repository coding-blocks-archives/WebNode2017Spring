/**
 * Created by championswimmer on 09/04/17.
 */
"use strict";
let b = 20;

function privFun() {
    console.log('this is a private function');
}

console.log('about to initialise count');
let count = 0;
console.log('we have initialised count = ' + count);

// console.log(this);
// console.log(k);

module.exports = {
    publicFun: function () {
        console.log('this is a public function');
        privFun();
    },
    increaseCount: function () {
        return ++count;
    }
};

