/**
 * Created by championswimmer on 01/04/17.
 */

function Person (age, firstname, lastname, nick = firstname) {
    this.age = age;
    this.firstname = firstname;
    this.lastname = lastname;
    this.nickname = nick;

}
Person.prototype.fullName = function () {
    console.log(this.firstname + " " + this.lastname);
};

let p1 = new Person(11, 'John', 'Doe')
p1.fullName();