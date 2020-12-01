type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if(easing === "ease-in") {

        } else if(easing === "ease-out") {

        } else if(easing === "ease-in-out") {

        } else {
            // 누군가 타입을 무시하게 된다면,
            // 이곳에 도달할 수 있다.
        }
    }
}

function createElement(tagName: "img"): any;
function createElement(tagName: "input"): any;
function createElement(tagName: string): any {

}
// createElement("test"); // Error!

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();
console.log(result);

function setupMap(config: MapConfig): void;
function setupMap(config: MapConfig): void {
    console.log(config.lat);
}

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16});