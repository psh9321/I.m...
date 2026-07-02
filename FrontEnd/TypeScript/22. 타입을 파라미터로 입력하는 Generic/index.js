"use strict";
/** generic 함수 */
function callback(x) {
    return x[0];
}
var a0 = callback([4, 2]);
var a1 = callback(["z", "x"]);
console.log(a0);
console.log(a1);
/** 파라미터 제한두기 (MyType2 가 number 의 속성을 가지고 있는지 체크) */
function callback2(x) {
    return x - 1;
}
var a2 = callback2(94);
/** MyType3 가 인터페이스의 속성을 가지고 있는지 체크 */
function callback3(x) {
    return x.length;
}
var a3 = callback3(["100"]);
