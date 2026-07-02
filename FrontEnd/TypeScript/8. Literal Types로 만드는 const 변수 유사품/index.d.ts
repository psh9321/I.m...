declare let n: "park"; /** n 이라는 변수에는 무조건 'park' 만 들어갈수 있음 */
declare let w: "aaa" | "bbb";
/** 변수에 뭐가 들어갈지 엄격하게 관리가능 (덤으로 자동완성도) */
declare function test(a: "zzz"): 1 | 0;
type ParamType = "가위" | "바위" | "보";
declare function test2(param: ParamType): ParamType[];
/** typescript 에서 const 는 확장성이 없음 */
declare var 자료: {
    readonly name: "park";
}; /** 타입 지정을 literal type 처럼 해줌 */
declare function 내함수(a: "park" /** 타입 지정 문자라서 단순히 string 이 아니라 park 만 들어와야함. 객체에서 끌어와서 쓸수 없음 */): void;
