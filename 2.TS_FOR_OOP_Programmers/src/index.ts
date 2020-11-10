interface Pointlike {
    x: number;
    y: number;
}
interface Named {
    name: string;
}

function printPoint(point: Pointlike) {
    console.log(`x is ${point.x}, y is ${point.y}`);
}
function printName(x: Named) {
    console.log(`Hello, Name is ${x.name}`);
}

const obj = {
    x: 4,
    y: 10,
    name: "noth",
}
printPoint(obj);
printName(obj);


class Empty {};

function fn(arg: Empty) {

}

fn({x:10}); // error가 나지 않는다.

class Car {
    drive() {

    }
}

class Golfer {
    drive() {

    }
}

let w: Car = new Golfer();