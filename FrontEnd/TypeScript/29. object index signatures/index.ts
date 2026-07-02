interface StringOnly {
    // name : string,
    // age : string,
    // location : string,

    // [key : string] : string /** 모든 문자로 된 속성 */
    [key : string] : string | number /** 모든 문자, 숫자로 된 속성 */
}

let user94 : StringOnly = {
    name : "park",
    age : "32",
    location : "gyung ju"
}

interface MyType {
    "font-size" : MyType | number
}

let css : MyType = {
    "font-size" : {
        "font-size" : {
            "font-size" : 28
        }   
    }
}


interface CarType {
    [key : string] : string | number
}

/** homework01 */
let obj22 : CarType = {
    model : "sonata",
    brand : "sonata",
    price : 4300,
    year : 2025,
    date : "7월",
    percent : "5%",
    dealer : "박수현"
}


/** homework02 */
interface Face {
    [key : string] : Face | number
}

let obj333 : Face = {
    "font-size" : 10,
    "secondary" : {
        "font-size" : 10,
        "third" : {
            "font-size" : 10,
        }
    }
}

console.log(obj333)


