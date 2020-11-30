// 1. First Interface
interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {
    size: 10,
    label: "Size 10 Object",
};
printLabel(myObj);

// 2. Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

interface NewSquare {
    color: string;
    area: number;
}

function createSquare(config: SquareConfig): NewSquare {
    let newSquare: NewSquare = {
        color: "white",
        area: 10,
    }
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare : NewSquare = createSquare({color: "black"});
console.log(mySquare);

// 3. Readonly Properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x:10, y:20 };
// p1.x = 5; Error!

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
console.log(ro); // Output ==> 3

//ro[0] = 12; Error!
a[2] = 7;
console.log(ro); // Output ==> 7

//a = ro; Error!
a = ro as number[];

// 4. Function Types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

let mySearch_2: SearchFunc;
mySearch_2 = function(src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
}

let mySearch_3: SearchFunc;
mySearch_3 = function(src,sub) {
    let result = src.search(sub);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class Dog extends Animal {
    bread: string;
    constructor(name: string, bread: string) {
        super(name);
        this.bread = bread;
    }
}
// Numeric index type 'Animal' is not assignable to string index type 'Dog'.
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

// Property 'name' of type 'string' is not assignable to string index type 'number'.
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;
//     name: string;
// }

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myROArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory";

// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     constructor(h: number, m: number) {};
// }


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date) : void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();

    setTime(d: Date) : void {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {};
}

interface ClockConstructor {
    new (hour: number, minute: number) : ClockInterface_2;
}

interface ClockInterface_2 {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface_2 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface_2 {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface_2 {
    constructor(h: number, m: number) {}
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

digital.tick();
analog.tick();

interface ClockConstructor_2 {
    new (hour: number, minute: number) : any;
}

interface ClockInterface_3 {
    tick() : void;
}

const Clock_3: ClockConstructor_2 = class Clock_3 implements ClockInterface_3 {
    constructor(h: number, m: number) {};
    tick() {
        console.log("beep bepp");
    }
}

const analog_2 = new Clock_3(1,2);
analog_2.tick();

interface ShapeShape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface SquareSquare extends ShapeShape, PenStroke {
    sideLength: number;
}

let square = {} as SquareSquare;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function (start: number): string { return start + "" }) as Counter;
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let c = getCounter();
console.log(c(10));
c.reset();
c.interval = 5.0;

class Control {
    private state: any;
}

interface SeletableControl extends Control {
    select(): void;
}

class Button extends Control implements SeletableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// Error!
// class Image implements SeletableControl {
//     private state : any;
//     select() {}
// }

