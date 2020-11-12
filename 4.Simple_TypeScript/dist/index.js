"use strict";
/* 1. */
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
var userArr = [1, 2, 3];
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var janeUser = { firstName: "Jane", lastName: "User" };
console.log(greeter2(janeUser));
/* 3.class */
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var classUser = new Student("No", ".25", "TH");
console.log(greeter2(classUser));
document.body.innerHTML = greeter2(classUser);
