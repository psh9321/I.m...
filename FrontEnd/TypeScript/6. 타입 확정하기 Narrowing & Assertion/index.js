"use strict";
/**
 * type 이 하나로 확정되지 않았을 경우 Type Narrowing 을 써야함
 *
 * 끝나는 else 문도 확실하게 넣어줘야함
 * */
function Callback(i) {
    var array = [];
    if (typeof i === "string") {
        return i + "1";
    }
    else {
        array[0] = i; /** i 를 number 로 변환. Assertion 이라고 함 ex) Number(i) */
        return i + 1;
    }
}
Callback(123);
