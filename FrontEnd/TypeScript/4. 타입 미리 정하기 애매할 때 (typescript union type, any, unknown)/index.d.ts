/** 문자도, 숫자도 들어올수 있음 : union type */
declare let user: number | string;
/** number 또는 string 이 배열에 들어갈수 있음 */
declare let membersArr: (number | string)[];
declare let obj2: {
    a: string | number;
};
/** 모든 타입을 다 넣을수 있음 (타입스크립트 쓰는 이유가 없어짐) */
declare let anyName: any;
/**
 * any 처럼 모든 타입을 다넣을수 있지만 any 보다 안전함
 * unknown 은 숫자 계산을 할 수 없음
 * */
declare let abc: unknown;
/** 유니온타입은 + 할수 없음 */
/** 숫자가 들어가 있으나 unknown이기 때문에 숫자 계산이 불가능함 */
/**
 * q1
 * let 나이: string|number;
 * 나이 + 1;
 *
 * 유니온 타입은 더하기가 불가능함
 * */
/**
 * q2
 * let 나이: unknown = 1;
 * 나이 + 1;
 *
 * 숫자를 넣어도 unknown 이기 때문에 숫자 계산이 불가능함
 * */
/** homework1 */
declare let userr: string;
declare let agee: undefined | number;
declare let married: boolean;
declare let 철수: (string | undefined | number | boolean)[];
/** homework2 */
declare let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: (string | (string)[]);
};
