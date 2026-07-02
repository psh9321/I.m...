declare class Human {
    name: string;
    constructor(name: string);
}
declare const me: Human;
/** homework01 */
declare class Car {
    name: string;
    price: number;
    constructor(name: string, price: number);
    tax(): number;
}
declare let 소나타: Car;
/** homework02 */
declare class Word {
    numberArr: number[];
    stringArr: string[];
    exceptionArr: any[];
    constructor(...args: any /** 모든 유형의 자료 */);
}
declare let homework02: Word;
