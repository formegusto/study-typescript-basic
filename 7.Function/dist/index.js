"use strict";
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
console.log(add(1, 2));
console.log(myAdd(3, 4));
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Bob"));
console.log(buildName("Bob", "Taeheon"));
function buildName_2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
console.log(buildName_2("Bob")); // Bob Smith
console.log(buildName_2("Bob", undefined)); // Bob Smith
console.log(buildName_2("Bob", "Rice")); // Bob Rice
function buildName_3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName_3("Joseph", "Samuel", "Lucas", "MacKinzie")); // Joseph Samuel Lucas MacKinzie
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정한다.
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
console.log(cardPicker());
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.onClickGood = function (e) {
            _this.info = e.message;
            console.log(_this.info);
        };
    }
    return Handler;
}());
var HandlerTest = /** @class */ (function () {
    function HandlerTest(onClick) {
        this.addClickListener = function () { };
        this.addClickListener = function () { onClick({ message: "test" }); };
    }
    return HandlerTest;
}());
var h = new Handler();
var ht = new HandlerTest(h.onClickGood);
ht.addClickListener();
console.log(h.info);
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // 인자가 배열 또는 객체인지 확인
    // 만약 그렇다면, deck이 주어지고 card를 선택합니다.
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // 그렇지 않다면 그냥 card를 선택합니다.
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
