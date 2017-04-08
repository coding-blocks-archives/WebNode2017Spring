/**
 * Created by championswimmer on 02/04/17.
 */

function Person(first, last, a) {
    this.firstname = first;
    this.lastname = last;
    let age = a;
    function incrementAge () {
        age++;
    }
    this.isEligible = function () {
        incrementAge();
        return age > 18;
    };
    this.getAge = function () {
        return age;
    }
}

let p1 = new Person('Harry', 'Potter', 12);
p1.isEligible();