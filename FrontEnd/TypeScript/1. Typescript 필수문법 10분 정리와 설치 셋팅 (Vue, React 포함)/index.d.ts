declare let names: string;
declare let arr: string[];
/** name 이 안들어올수도 있을때 에러처리 */
declare let obj: {
    name?: string;
};
/** 문자나 숫자가 들어올수 있음 */
declare let name2: string | number;
/** 타입 지정 */
type Type = string | number;
type CallbackType = number;
type CallbackReturnType = number;
declare function callbackK(i: CallbackType): CallbackReturnType /** 리턴 될 타입 */;
/** tuple 타입 이라고 함. 배열의 첫번째는 무조건 숫자, 두번째는 무조건 boolean */
type Member = [number, boolean];
declare let arr2: Member;
type Member2 = {
    /** 객체안 문자로 들어오는 속성은 자료형이 다 문자 여야함 */
    [key: string]: string;
};
declare class User {
    /** class 시 이렇게 해야함 */
    name: string;
    constructor(name: string);
}
