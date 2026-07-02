/** generic 함수 */

function callback<MyType>(x : MyType[]) : MyType {
    return x[0]
}

const a0 = callback<number>([4,2]);

const a1 = callback<string>(["z","x"]);

console.log(a0);

console.log(a1);






/** 파라미터 제한두기 (MyType2 가 number 의 속성을 가지고 있는지 체크) */
function callback2<MyType2 extends number>(x : MyType2) {
    return x - 1
}

const a2 = callback2<number>(94)

interface CustomInterFaceLength {
    length : number
}

/** MyType3 가 인터페이스의 속성을 가지고 있는지 체크 */
function callback3<MyType3 extends CustomInterFaceLength>(x : MyType3)  {
    return x.length
}

const a3 = callback3<string[]>(["100"])

