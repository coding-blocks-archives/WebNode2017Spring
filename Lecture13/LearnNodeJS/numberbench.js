/**
 * Created by championswimmer on 09/04/17.
 */


function usingPlus(num) {
    num = +num;
}

function usingParseInt(num) {
    num = parseInt(num);
}

function usingMultiply(num) {
    num = 1*num;
}

function usingNumberConstructor(num) {
    num = new Number(num);
}

function usingNumberFunction(num) {
    num = Number(num);
}

let start = new Date().getTime();
for (let i = 0; i < 10000000; i++) {
    usingNumberFunction("" + i + " asdasdasd");
}
console.log(new Date().getTime() - start);