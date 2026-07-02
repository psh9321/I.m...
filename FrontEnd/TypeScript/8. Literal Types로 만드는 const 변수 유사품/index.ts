let n : "park" /** n 이라는 변수에는 무조건 'park' 만 들어갈수 있음 */

let w : "aaa" | "bbb"

/** 변수에 뭐가 들어갈지 엄격하게 관리가능 (덤으로 자동완성도) */

function test(a : "zzz") : 1 | 0 {
    return a === "zzz" ? 1 : 0
}

console.log(test("zzz"))



type ParamType = "가위" | "바위" | "보";

function test2(param : ParamType) : ParamType[] {
    return [param]
}

console.log(test2("보"))

/** typescript 에서 const 는 확장성이 없음 */

var 자료 = {
    name : "park"
} as const /** 타입 지정을 literal type 처럼 해줌 */

function 내함수(a : "park" /** 타입 지정 문자라서 단순히 string 이 아니라 park 만 들어와야함. 객체에서 끌어와서 쓸수 없음 */) {

}

내함수(자료["name"])