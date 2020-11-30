function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (baseValue: number, increment: number) => number = function(x:number, y:number): number { return x + y };

console.log(add(1,2));
console.log(myAdd(3,4));

function buildName(firstName: string, lastName?: string) {
    if(lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Bob"));
console.log(buildName("Bob","Taeheon"));

function buildName_2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName; 
}
console.log(buildName_2("Bob")); // Bob Smith
console.log(buildName_2("Bob", undefined)) // Bob Smith
console.log(buildName_2("Bob", "Rice")) // Bob Rice

function buildName_3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName_3("Joseph", "Samuel", "Lucas", "MacKinzie")); // Joseph Samuel Lucas MacKinzie

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정한다.
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
console.log(cardPicker());

interface Event {
    message: string;
}

interface UIElement {
    addClickListener(onClick: (this: void, e: Event) => void) : void;
}

class Handler {
    info?: string;
    onClickGood = (e: Event) => { 
        this.info = e.message;
        console.log(this.info);
    }
}

class HandlerTest implements UIElement {
    addClickListener = () : void => {};
    constructor(onClick: (e: Event) => void){
        this.addClickListener = () => { onClick({message: "test"} as Event) };
    }
}

let h = new Handler();
let ht =  new HandlerTest(h.onClickGood);
ht.addClickListener();
console.log(h.info);

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: Card []): number;
function pickCard(x: number): Card;
function pickCard(x: Card[] | number): any {
    // 인자가 배열 또는 객체인지 확인
    // 만약 그렇다면, deck이 주어지고 card를 선택합니다.
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // 그렇지 않다면 그냥 card를 선택합니다.
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
