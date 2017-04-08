/**
 * Created by championswimmer on 02/04/17.
 */

// Having private variables using ES6 class syntax is not possible

class Person {
    constructor(first, last, a) {
        this.firstname = first;
        this.lastname = last;
        let age = a;
    }

    setAge() {
        this.age = 15;
    }

    getAge() {
        console.log(this.age);
        return this.age;
    }

    isEligible() {
        return this.age > 18;
    }
}

let p1 = new Person('Harry', 'Potter', 15);