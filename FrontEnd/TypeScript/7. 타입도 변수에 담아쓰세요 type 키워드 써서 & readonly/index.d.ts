type Animal = string | number | undefined;
type AnimalObj = {
    name: string;
    age: number;
};
declare let animal01: Animal;
declare let animal02: AnimalObj;
type AA = {
    readonly name: string; /** 객체안 프로퍼티 수정이 불가능 하게 함 */
    age?: number; /** age 는 선택사항이 되므로 안들어와도 에러가 나지 않음 */
};
declare const a: AA;
type Name = String;
type Age = number;
/** union type 으로 합치기 가능 */
type Person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType = PositionX & PositionY; /** 타입 extend {x : number, y : number} */
declare let position: NewType;
/**
 * 타입은 const 처럼 재정의 불가능
 */
/** homework01 */
type Home1 = {
    a: number;
};
type Home2 = {
    b: number;
};
/** 동일한 값이 있으면 안됨 ex) {a : 1, a : 2} */
type newHome = Home1 & Home2;
declare let abcc: newHome;
/** homework02 */
type ColorObj = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let colorObj: ColorObj;
/** homework03 */
type My = {
    name: string;
    phone: number | string;
    email: string;
};
declare const MyObj: My;
type My2 = {
    name: string;
    phone?: string;
    email?: string;
    isAdult: boolean;
};
type MyIsAdult = {
    isAdult: boolean;
};
declare const myObj2: (My2 & MyIsAdult);
