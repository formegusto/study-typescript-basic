// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }
// // 초기 변수를 1로 초기화 시, 아래로 1,2,3,4 값을 가지게 된다.
// // 초기화가 없을 경우 처음 변수를 0으로 치고, 0,1,2,3 값을 가지게 된다.

// enum CustomResponse {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: CustomResponse): void {
//     console.log(recipient);
//     console.log(message);
// }

// respond("Princess Caroline", CustomResponse.Yes);

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
// 모든 멤버들은 문자열 리터럴 또는 다른 문자열 열거형의 멤버로 상수 초기화 되어야 한다.
// 이는 숫자형 열거형과 런타임에서의 차이를 보이는데,
// "직렬화를 잘한다." 이는 코드를 실행할 때, 열거형 멤버에 지정된 이름과는 무관하게
// 유의미하고 읽기 좋은 값을 이용하여 실행할 수 있다.

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

// let c: Circle = {
//     kind: ShapeKind.Square, // 오류! 'ShapeKind.Circle' 타입에 'ShapeKind.Square' 타입을 할당할 수 없습니다.
//     radius: 100,
// }

enum Enum {
    A
}
let a = Enum.A;
console.log(Enum[a]);