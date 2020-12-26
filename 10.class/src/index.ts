// 1. 기본 유형
class Greeter {
    greeting: string;

    constructor(message:string) {
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
    private name: string;

    constructor(theName: string) { this.name = theName; }
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

// class Person {
//     protected name: string;
//     protected constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }

//     public geElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John");

// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // Error!

// 4. 접근자
const fullNameMaxLength = 10;

class Employee {
    private _fullName: string = "th";


    get fullName(): string{
        return this._fullName
    }

    set fullName(newName: string) {
        if(newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

class Grid {
    static origin = {x: 0, y: 0};
    calcuateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale:number) {}
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calcuateDistanceFromOrigin({x:10, y:10}));
console.log(grid2.calcuateDistanceFromOrigin({x: 10, y:10}));

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // 반드시 파생된 클래스에서 구현되어야 합니다.
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // 파생된 클래스의 생성자는 반드시 super()를 호출해야 합니다.
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // 추상 타입의 레퍼런스를 생성합니다
// let department: AccountingDepartment;
// department = new Department(); // 오류: 추상 클래스는 인스턴스화 할 수 없습니다
department = new AccountingDepartment(); // 추상이 아닌 하위 클래스를 생성하고 할당합니다
department.printName();
department.printMeeting();
// department.generateReports(); // 오류: 선언된 추상 타입에 메서드가 존재하지 않습니다. 타입을 하위 클래스로 주면 가능
