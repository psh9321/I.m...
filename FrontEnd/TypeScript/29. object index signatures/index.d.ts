interface StringOnly {
    [key: string]: string | number; /** 모든 문자, 숫자로 된 속성 */
}
declare let user94: StringOnly;
interface MyType {
    "font-size": MyType | number;
}
declare let css: MyType;
interface CarType {
    [key: string]: string | number;
}
/** homework01 */
declare let obj22: CarType;
/** homework02 */
interface Face {
    [key: string]: Face | number;
}
declare let obj333: Face;
