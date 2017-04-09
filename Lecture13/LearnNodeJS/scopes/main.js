/**
 * Created by championswimmer on 09/04/17.
 */
"use strict";

global.k = 'value';
this.p = "123";

let lib2 = require('./lib2');
let lib = require('./lib');
const Person = require('./person');

if (true) {
    let lib1 = require('./lib');
    console.log('count = ' + lib1.increaseCount());
}

let requiredLibs = [];
for (let i = 0; i < 5; i++) {
    requiredLibs[i] = require('./lib' + i);
}


console.log('count = ' + lib.increaseCount());

let p = new Person("Arnav", 22);


console.log(lib == lib2.getLib1());

let a = 10;


console.log(a);

//lib.publicFun();