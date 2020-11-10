"use strict";
function getLength(obj) {
    if (typeof obj === "string")
        return [obj];
    else
        return obj;
}
/* 타입 읽기 typeof 연산자 */
var s = "hello";
console.log(typeof s); // string
var windowStates = "open";
console.log(typeof windowStates); // string 이건 좀 아숩네;;
var obj = {
    id: 1,
    name: "noth",
};
console.log(typeof obj); // object
var BackPack = {
    state: "Init",
    add: function (str) {
        BackPack.state += " / " + str;
    },
    get: function () { return BackPack.state; }
};
console.log(BackPack.get()); // Init
BackPack.add("one");
BackPack.add("two");
console.log(BackPack.get()); // Init / one / two
function printPoint(p) {
    console.log(p.x + ", " + p.y);
}
var point = {
    x: 1,
    y: 2,
};
printPoint(point);
var point_ex = {
    x: 1,
    y: 2,
    z: 3,
};
printPoint(point_ex);
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(5, 6);
printPoint(newVPoint);
