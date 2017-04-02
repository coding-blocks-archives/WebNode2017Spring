/**
 * Created by championswimmer on 01/04/17.
 */

let a = {one: 1, two: 2};
let b = Object.create(a);

a.three = 3;

let c = Object.create(a);

b.one = b.__proto__.one + 1;

