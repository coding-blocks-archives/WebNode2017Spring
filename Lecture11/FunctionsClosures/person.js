/**
 * Created by championswimmer on 02/04/17.
 */

function Person (first, last, age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    function incrementAge () {
        console.log('adding age');
    }
    this.isEligible = function () {
        incrementAge();
        if (age > 18) {
            return true;
        }
    }
}

Person.prototype.fullName = function () {
    return this.firstname + " " + this.lastname;
};

Person.staticFunc = function() {
    console.log('some static function');
};

let p1 = new Person('John', 'Doe', 22);