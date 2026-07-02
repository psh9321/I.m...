let names : string = "su hyun";

let arr : string[] = ["park", "suhyun"];

/** name 이 안들어올수도 있을때 에러처리 */
let obj : { name? : string } = { name : "su hyun" }

/** 문자나 숫자가 들어올수 있음 */
let name2 : string | number = 2;

/** 타입 지정 */
type Type = string | number;


type CallbackType = number;
type CallbackReturnType = number;
function callbackK(i : CallbackType) : CallbackReturnType /** 리턴 될 타입 */ {
    return i * 2
}

/** tuple 타입 이라고 함. 배열의 첫번째는 무조건 숫자, 두번째는 무조건 boolean */
type Member = [number, boolean];
let arr2 : Member = [1,false];

type Member2 = {
    /** 객체안 문자로 들어오는 속성은 자료형이 다 문자 여야함 */
    [key : string] : string
}

class User {
    /** class 시 이렇게 해야함 */
    name : string;

    constructor(name : string){
        this.name = name;
    }
}