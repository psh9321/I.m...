declare let obj999: {
    name: string;
    age: number;
};
interface Personn {
    name: string;
    age: number;
}
/** key 값을 전부 가져오는 keyof */
type PersonKeys = keyof Personn;
declare let rrrr: PersonKeys;
type Caar = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<MyType> = {
    [key in keyof MyType]: string /** 왼쪽 의 키값이 오른쪽 파라미터에 있으면 string 으로 변환 */;
};
type NewType222 = TypeChanger<Caar>;
