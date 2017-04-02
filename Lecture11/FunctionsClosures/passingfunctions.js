/**
 * Created by championswimmer on 02/04/17.
 */


function fun1(anotherfunction) {
    console.log('fun 1');
    anotherfunction();
}

function fun2 () {
    console.log('fun 2')
}

fun1(fun2);