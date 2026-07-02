interface SquareType {
    color: string;
    width: number;
}
declare let square: SquareType;
/**
 * interface 를 사용하면 extends 사용 가능
 */
interface StudentType {
    name: string;
}
interface TeacherType extends StudentType {
    age: number;
}
declare const student: StudentType;
declare const teacher: TeacherType;
/**
 * type alias extends
 * interface extends 와 달리 교차 해달라는 뜻
 */
type CityType = {
    name: string;
};
type CityCuntry = {
    cuntry: string;
} & CityType;
/**
 * interface 는 var 처럼 중복선언이 가능 함 (합쳐짐)
 * type 은 중복선언 하면 에러남
 *
 * 다른 사람이 이용 많이 할거 같으면 객체 타입 정할때 interface 사용
 */
/** homework01 */
interface InterFaceItem {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let item: InterFaceItem;
/** homework02 */
interface InterFaceArrayItem {
    product: string;
    price: number;
}
declare let items: InterFaceArrayItem[];
interface NewInterFaceArrayItem extends InterFaceArrayItem {
    card: boolean;
}
declare let items02: NewInterFaceArrayItem;
/** homework03 */
interface UnknownType {
    a: number;
    b: number;
}
declare class Class01 implements UnknownType {
    a: number;
    b: number;
    constructor(a: number, b: number);
    plus(): number;
    minus(): number;
}
interface UnknownType2 {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let vvv: UnknownType2;
