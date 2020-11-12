"use strict";
// 불리언(Boolean) : true or false
var isDone = false;
// 숫자(number)
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// 문자열(string)
var color = "blue";
color = 'red';
// color = 1;
// 배열(Array)
// 1. type[]
var list = [1, 2, 3];
// 2. Generics Array Type
var listGenerics = [4, 5, 6];
// 튜플(Tupple)
var x;
// x = [10, "hello"] // Error!
// x = ["hello", 10, 20]; // Error!
x = ["hello", 10]; // Success!
console.log(x[0].substring(1));
// console.log(x[1].substring(1)); // error! It's Number!
// 열거(Enum)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var colorName = Color[1];
console.log(c);
console.log(colorName);
// enum Color {Red=1, Green, Blue}
// enum Color {Red=1, Green=2, Blue=4}
