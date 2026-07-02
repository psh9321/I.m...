"use strict";
/** homework01 */
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
// 함수({ student : true, age : 20 })
/** homework02 */
function Callback94() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    if (param.length <= 0)
        return -1;
    var no = 0;
    for (var i = 0; i < param.length; i++) {
        var item_1 = param[i];
        if (item_1 > no)
            no = item_1;
    }
    return no;
}
console.log(Callback94(1, 90, 2, 3, 4, 5, 6, 1994, 711));
