"use strict";
var Callback2 = function (a /** 파라미터 타입 선언 안해도됨 */) {
    return 10;
};
var userInfo = {
    name: "park",
    plusOne: function (i) {
        return i + 1;
    },
    changeName: function () {
        console.log("console");
    }
};
var cutZero = function (str) {
    if (str.indexOf("0") > -1)
        return str.replace("0", "");
    return str;
};
var removeDash = function (str) {
    if (str.indexOf("-") > -1)
        return str.replace(/-/g, ""); /** g : 모두 */
    return str;
};
var lastCallback = function (a, b, c) {
    var qqq = b(a);
    var result = c(qqq);
    console.log("result", result);
};
lastCallback("010-9462-9321", cutZero, removeDash);
