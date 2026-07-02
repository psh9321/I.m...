// type SquareType = { color : string, width : number };
interface SquareType { color : string, width : number };

let square : SquareType = { color : "black", width : 34 };


/** 
 * interface 를 사용하면 extends 사용 가능
 */
interface StudentType { name : string };
interface TeacherType extends StudentType  {
    age : number
};

const student : StudentType = { name : "suhyun" };
const teacher : TeacherType = { name : "suhyun", age : 32 };

/** 
 * type alias extends
 * interface extends 와 달리 교차 해달라는 뜻
 */
type CityType = { name : string }
type CityCuntry = { cuntry : string } & CityType

/**
 * interface 는 var 처럼 중복선언이 가능 함 (합쳐짐)
 * type 은 중복선언 하면 에러남
 * 
 * 다른 사람이 이용 많이 할거 같으면 객체 타입 정할때 interface 사용
 */



/** homework01 */

interface InterFaceItem {
    brand : string,
    serialNumber : number,
    model : string[]
}

let item : InterFaceItem = {
    brand : "apple",
    serialNumber : 1994,
    model : ["iphone15", "airpods pro2"]
}



/** homework02 */
interface InterFaceArrayItem {
    product : string,
    price : number
}

let items : InterFaceArrayItem[] = [
    {product : "iphone", price : 1250000},
    {product : "airpods", price : 450000}
];

interface NewInterFaceArrayItem extends InterFaceArrayItem {
    card : boolean
}

let items02 : NewInterFaceArrayItem = {
    product : "macbook",
    price : 3600000,
    card : true
}


/** homework03 */
interface UnknownType {
    a : number,
    b : number
}

class Class01 implements UnknownType {

    a : number;
    b : number;

    constructor(a : number, b : number) {
        this.a = a;
        this.b = b;
    }

    plus() : number {
        return this.a + this.b
    }

    minus() : number {
        return this.a - this.b
    }
}

interface UnknownType2 {
    plus : (a : number, b : number) => number
    minus : (a : number, b : number) => number
}


let vvv : UnknownType2 = {
    plus(a,b) {
        return a + b
    },

    minus(a,b) {
        return a - b
    }
}