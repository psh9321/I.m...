/** 물음표 붙이는건 맨뒤에서 부터 붙여야함 */
const arr22 : [string, boolean, number?] = ["doc", false];

/**
 * ...x 은 rest 파라미터이고 
 * 파라미터가 여러개일때 x 를 콘솔 찍어보면 배열에 담긴 파라미터들이 출력됨 
 *
 * @param x 
 */
function callback94(...x : [number, string]){

}



const arr12 = [1,2,3];
const arr34 : [number, number, ...number[] /** 세번째 부터 숫자가 여러개 들어올수있는데 몇개나 들어올지 모를때 */] = [4,5];


/** homework01 */
const homework001 : [string, number, boolean] = ["에너지바",1500,true];


/** homework02 */
const homework022 : [string, number, ...boolean[]] = ["에너지바",1500,false, true, false, true];

/** homework03 */

/** 내가한거 */
// function homework003 (a : string, b : boolean, c : string | number) : void {
//     console.log(a,b,c)
// }

/** 답(?) */
function homework003(...rest : [string, boolean, ...(number | string)[]]){
    
}

homework003("1",false, "2",2,3,4,222)


type abc = [string[], number[]]

/** homework4 */
function homework004(...rest : (string|number)[]) : [...any[]] | [string[], number[]]{

    if(rest.length <= 0) return []

    const strArr : string[] = [];
    const numberArr : number[] = [];

    for(let i= 0; i < rest.length; i++) {
        const item = rest[i];
        if(typeof item === "number") numberArr.push(item);
        if(typeof item === "string") strArr.push(item);
    }

    return [strArr, numberArr]
}

console.log(homework004("2","3","4",2,3))