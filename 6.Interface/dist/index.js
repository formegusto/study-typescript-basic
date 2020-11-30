"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object",
};
printLabel(myObj);
function createSquare(config) {
    var newSquare = {
        color: "white",
        area: 10,
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 5; Error!
var a = [1, 2, 3, 4];
var ro = a;
console.log(ro); // Output ==> 3
//ro[0] = 12; Error!
a[2] = 7;
console.log(ro); // Output ==> 7
//a = ro; Error!
a = ro;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearch_2;
mySearch_2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch_3;
mySearch_3 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, bread) {
        var _this = _super.call(this, name) || this;
        _this.bread = bread;
        return _this;
    }
    return Dog;
}(Animal));
var myROArray = ["Alice", "Bob"];
myArray[2] = "Mallory";
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    ;
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
var Clock_3 = /** @class */ (function () {
    function Clock_3(h, m) {
    }
    ;
    Clock_3.prototype.tick = function () {
        console.log("beep bepp");
    };
    return Clock_3;
}());
var analog_2 = new Clock_3(1, 2);
analog_2.tick();
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = (function (start) { return start + ""; });
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
console.log(c(10));
c.reset();
c.interval = 5.0;
console.log(c);
