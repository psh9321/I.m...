/** 문자도, 숫자도 들어올수 있음 : union type */
let user : number | string = 123;

user = "ss";

user = 1;

/** number 또는 string 이 배열에 들어갈수 있음 */
let membersArr : (number | string)[] = [1,"2",3];

let obj2 : {a : string | number} = {a : ""};

obj2["a"] = 2;
obj2["a"] = "d";

/** 모든 타입을 다 넣을수 있음 (타입스크립트 쓰는 이유가 없어짐) */
let anyName : any;
anyName = 1;
anyName = false;
anyName = "aa";

/** 
 * any 처럼 모든 타입을 다넣을수 있지만 any 보다 안전함 
 * unknown 은 숫자 계산을 할 수 없음
 * */
let abc : unknown;

/** 유니온타입은 + 할수 없음 */
// let age3 : string|number;

/** 숫자가 들어가 있으나 unknown이기 때문에 숫자 계산이 불가능함 */
// let age3 : unknown = 1;
// age3 - 1




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
let userr : string = 'kim';
let agee : undefined | number = undefined;
let married : boolean = false; 
let 철수 : (string | undefined | number | boolean)[] = [user, age, married];


/** homework2 */
let 학교 : {
    score : (number | boolean)[],
    teacher : string,
    friend : (string | (string)[])
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
