"use strict";
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // 누군가 타입을 무시하게 된다면,
            // 이곳에 도달할 수 있다.
        }
    };
    return UIElement;
}());
function createElement(tagName) {
}
// createElement("test"); // Error!
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
console.log(result);
function setupMap(config) {
    console.log(config.lat);
}
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
