// 1. Unions
type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
type ThObj = {
    id: number;
    name: string;
}

function getLength(obj: string | string[]) {
    if(typeof obj === "string")
        return [obj];
    else 
        return obj;
}

/* 타입 읽기 typeof 연산자 */
const s = "hello";
console.log(typeof s); // string

const windowStates : WindowStates = "open";
console.log(typeof windowStates); // string 이건 좀 아숩네;;

const obj: ThObj = {
    id : 1,
    name : "noth",
}
console.log(typeof obj); // object
// ==> 어짜피 컴파일 되면 js 이기 때문에 내가 정의한 타입은 출력되지 않는다.

// 2. Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface BackPack<Type> {
    state: Type;
    add: (obj: Type) => void;
    get: () => Type;
}

const BackPack: BackPack<string> = {
    state: "Init",
    add: (str) => {
        BackPack.state += ` / ${str}`;
    },
    get: () => BackPack.state
}

console.log(BackPack.get()); // Init
BackPack.add("one");
BackPack.add("two");
console.log(BackPack.get()); // Init / one / two

// 3. Structural Type System
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = {
    x: 1,
    y: 2,
}
printPoint(point);

const point_ex = {
    x: 1,
    y: 2,
    z: 3,
}
printPoint(point_ex);

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(5,6);
printPoint(newVPoint);