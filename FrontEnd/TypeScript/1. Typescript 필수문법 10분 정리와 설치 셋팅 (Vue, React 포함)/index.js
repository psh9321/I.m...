"use strict";
var names = "su hyun";
var arr = ["park", "suhyun"];
/** name 이 안들어올수도 있을때 에러처리 */
var obj = { name: "su hyun" };
/** 문자나 숫자가 들어올수 있음 */
var name2 = 2;
function callbackK(i) {
    return i * 2;
}
var arr2 = [1, false];
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
