"use strict";
// 1. 기본 유형
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
console.log(greeter.greet());
// 2. 상속
// class Animal {
//     move(distanceInMeters: number = 0){
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move();
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0){
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name) }; /* super name 으로만 접근 가능 */
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name) } 
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
// 3. 접근 지정자
class Animal {
    constructor(theName) { this.name = theName; }
}
class Rhino extends Animal {
    constructor() { super("Rhino"); }
}
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
let animal = new Animal("Goat");
let rhino = new Rhino();
// let employee = new Employee("Bob");
animal = rhino;
// animal = employee; // Error!
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    geElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
}
let howard = new Employee("Howard", "Sales");
// let john = new Person("John");
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // Error!
