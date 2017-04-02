/**
 * Created by championswimmer on 02/04/17.
 */

const DEFAULT_AGE = 10;

function Person (name, age) {
    this.name = name;
    this.age = age || DEFAULT_AGE;
}

let p1 = new Person('John', 34);
let p2 = new Person('Harry');