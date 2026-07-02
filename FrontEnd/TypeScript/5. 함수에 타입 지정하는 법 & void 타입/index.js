"use strict";
function Callbackk(x) {
    // return x * 2
    x + 1;
}
Callbackk(32);
/**
 * 함수에서 return 을 해주지 않을때 void 를 선언함 (return 이 될시 에러)
 *
 * ? 의문문이 들어왔을때는 파라미터가 없어도 에러가 나지않음 (undefined 와 같음)
 */
function HomeWork01(txt) {
    return txt !== null && txt !== void 0 ? txt : "이름이 없습니다.";
}
// console.log(HomeWork01())
function HomeWork02(param) {
    if (typeof param === "string") {
        return param.length;
    }
    else if (typeof param === "number") {
        return String(param).length;
    }
    else {
        return -1;
    }
}
// console.log(HomeWork02("aaaaaa"))
function HomeWork03(income, isHouse, appeal) {
    // if(income < 700) return undefined
    var PointInCome = Math.floor(income / 10000);
    var PointHouse = isHouse === true ? 500 : 0;
    var PointAppeal = appeal === "상" ? 100 : 0;
    var result = PointInCome + PointHouse + PointAppeal;
    return result >= 700 ? "결혼가능" : undefined;
}
// console.log(HomeWork03(3000000, true, "상"))
