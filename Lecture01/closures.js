/**
 * Created by championswimmer on 04/05/17.
 */

function funGen() {
    console.log('running funGen');
    return function () {
        console.log('dafuq bro');
    }
}

var generatedFunction = funGen();
generatedFunction();

var adder = (function adderGen(num, delta) {
    return function () {
        num += delta;
        console.log(num);
    }
})(10,5)();

console.log(adder);

//let adder = adderGen(10,5);
//adder();
//adder();


function modGen (num, delta) {
    return {
        val: num,
        increment: function () {
            num += delta;
            return num;
        },
        decrement: function () {
            num -= delta;
            return num;
        }

    }
}
console.log("======");

var mod = modGen(20, 2);
console.log(mod.val);
console.log(mod.increment());
console.log(mod.increment());
console.log(mod.decrement());



