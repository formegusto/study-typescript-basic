/* 1. */
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
console.log(greeter(user));
let userArr = [1,2,3];
// console.log(greeter(userArr));

/* 2.interface */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
let janeUser = { firstName: "Jane" , lastName: "User" };
console.log(greeter2(janeUser));

/* 3.class */
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

let classUser = new Student("No", ".25", "TH");
console.log(greeter2(classUser));

document.body.innerHTML = greeter2(classUser);