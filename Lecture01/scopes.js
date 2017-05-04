/**
 * Created by championswimmer on 02/05/17.
 */
"use strict";
var a = 10;

function alpha () {
    var b = 40;
    a++;
}
alpha();
console.log(a);

function beta () {
    let hh = 10;
    if (true) {
        var jj = 9;
        let hh = 41;
        console.log(hh);
        const k = 10;


    }
    //console.log(k);
    console.log(hh);
    console.log(jj);
}
beta();

