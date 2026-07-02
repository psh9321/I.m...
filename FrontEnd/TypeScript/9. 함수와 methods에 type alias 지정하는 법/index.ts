type CallbackType2 = (a : string) => number;



let Callback2 : CallbackType2 = function(a /** 파라미터 타입 선언 안해도됨 */) {
    return 10
}


/** homework01 */
type UserInfoType = {
    name : string,
    plusOne : (i : number) => number,
    changeName : () => void
};

let userInfo : UserInfoType = {
    name : "park",
    plusOne : (i) => {
        return i + 1
    },
    changeName : () => {
        console.log("console")
    }
}

// console.log("1",userInfo.plusOne(2))


/** homework02 */

type CutZeroType = (str : string) => string;

let cutZero : CutZeroType = (str) => {

    if(str.indexOf("0") > -1) return str.replace("0","");

    return str
}

type RemoveDash = (str : string) => string

let removeDash : RemoveDash = (str) => {
    if(str.indexOf("-") > -1) return str.replace(/-/g,""); /** g : 모두 */

    return str
} 

// console.log(cutZero("03fff"))
// console.log("dash",removeDash("-f-s-e"))

/** homework03 */
type LastCallbackType = (a : string, b : CutZeroType, c : RemoveDash) => void;

let lastCallback : LastCallbackType = (a, b, c) => {
    const qqq = b(a);

    const result = c(qqq);

    console.log("result", result)
}

lastCallback("010-9462-9321", cutZero, removeDash)