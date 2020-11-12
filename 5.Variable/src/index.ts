// 불리언(Boolean) : true or false
let isDone: boolean = false;

// 숫자(number)
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// 문자열(string)
let color: string = "blue";
color = 'red';
// color = 1;

// 배열(Array)
// 1. type[]
let list: number[] = [1,2,3];

// 2. Generics Array Type
let listGenerics: Array<number> = [4,5,6];

// 튜플(Tupple)
let x: [string, number];
// x = [10, "hello"] // Error!
// x = ["hello", 10, 20]; // Error!
x = ["hello", 10]; // Success!

console.log(x[0].substring(1));
// console.log(x[1].substring(1)); // error! It's Number!

// 열거(Enum)
enum Color {Red, Green, Blue}
let c: Color = Color.Red;
let colorName: string = Color[1];

console.log(c);
console.log(colorName);
// enum Color {Red=1, Green, Blue}

// enum Color {Red=1, Green=2, Blue=4}

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// let notSure: any = 4;
// notSure.isItExists();

// let prettySure: Object = 4;
// prettySure.isItExists();

// Void
function warnUser(): void {
    console.log("This is my warning msg");
}
let unusable: void = undefined;
// unusable = null; // --strictNullChecks 를 사용하지 않을 때만 성공 tsconfig.json

// null and undefined
let u: undefined = undefined;
let n: null = null;

// Never
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다. (함수의 마지막은 return)
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
    return error("Error!!!");
}

// nver를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
// function infiniteLoop(): never {
//     while(true) {}
// }

// Object
declare function create(o: object) : void;

create({ prop: 0 });
// create(null); // Error
// create(1); // Error
// create(undefined); // Error