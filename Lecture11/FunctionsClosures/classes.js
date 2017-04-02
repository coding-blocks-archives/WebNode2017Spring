/**
 * Created by championswimmer on 02/04/17.
 */

class Person {
    constructor (first, last, age) {
        this.firstname = first;
        this.lastname = last;
        this.age = age;
        let privFullName = null;
    }

    get fullName() {
        return this.privFullName || (this.firstname + " " + this.lastname)
    }

    set fullName(name) {
        this.privFullName = name;
    }

    static staticFunc () {
        console.log('some static function');
    }
}

class Student extends Person {
    constructor(first, last, age, house) {
        super(first, last, age)
        this.house = house;
    }
}

let p1 = new Person('John', 'Doe', 10);
let s1 = new Student('Harry', 'Potter', 18, 'Gryffindor');