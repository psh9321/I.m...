"use strict";
/** 물음표 붙이는건 맨뒤에서 부터 붙여야함 */
var arr22 = ["doc", false];
/**
 * ...x 은 rest 파라미터이고
 * 파라미터가 여러개일때 x 를 콘솔 찍어보면 배열에 담긴 파라미터들이 출력됨
 *
 * @param x
 */
function callback94() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
}
var arr12 = [1, 2, 3];
var arr34 = [4, 5];
/** homework01 */
var homework001 = ["에너지바", 1500, true];
/** homework02 */
var homework022 = ["에너지바", 1500, false, true, false, true];
/** homework03 */
/** 내가한거 */
// function homework003 (a : string, b : boolean, c : string | number) : void {
//     console.log(a,b,c)
// }
/** 답(?) */
function homework003() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
homework003("1", false, "2", 2, 3, 4, 222);
/** homework4 */
function homework004() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    if (rest.length <= 0)
        return [];
    var strArr = [];
    var numberArr = [];
    for (var i = 0; i < rest.length; i++) {
        var item_1 = rest[i];
        if (typeof item_1 === "number")
            numberArr.push(item_1);
        if (typeof item_1 === "string")
            strArr.push(item_1);
    }
    return [strArr, numberArr];
}
console.log(homework004("2", "3", "4", 2, 3));
