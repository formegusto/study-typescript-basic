"use strict";
function printPoint(point) {
    console.log("x is " + point.x + ", y is " + point.y);
}
function printName(x) {
    console.log("Hello, Name is " + x.name);
}
var obj = {
    x: 4,
    y: 10,
    name: "noth",
};
printPoint(obj);
printName(obj);
