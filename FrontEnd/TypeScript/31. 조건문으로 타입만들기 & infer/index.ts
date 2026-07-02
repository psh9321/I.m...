type Age555<T> = T extends string ? string : unknown; /** 타입의 파라미터가 문자면 문자이고 문자가 아니면 unknown 을 남김 */

let zxc : Age555<string> = "ss";
let qwe : Age555<number> = 2

console.log("zz",qwe)


/** 
 * quiz
 * 타입 파라미터로 array 를 입력하면 array 의 첫 자료 타입을 남겨주고
 * array 가 아니면 any 를 타입으로 남김
 */
type FirstItem<T> = T extends any[] ? T[0] : any

let quiz : FirstItem<boolean[]>
let quiz2 : FirstItem<number>



/** infer : 타입을 뽑는 키워드 */
type Personnn<T> = T extends (infer R)[] ? R : unknown;

/** @type {number} */
type Infer = Personnn<number[]>

/** infer : 타입을 뽑는 키워드 */
type Personnn2<T> = T extends (() => infer R) ? R : unknown;


type Infer2 = Personnn2< () => void>