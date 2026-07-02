/** generic 함수 */
declare function callback<MyType>(x: MyType[]): MyType;
declare const a0: number;
declare const a1: string;
/** 파라미터 제한두기 (MyType2 가 number 의 속성을 가지고 있는지 체크) */
declare function callback2<MyType2 extends number>(x: MyType2): number;
declare const a2: number;
interface CustomInterFaceLength {
    length: number;
}
/** MyType3 가 인터페이스의 속성을 가지고 있는지 체크 */
declare function callback3<MyType3 extends CustomInterFaceLength>(x: MyType3): number;
declare const a3: number;
