
function QQQ() : never /** 함수 실행이 끝나지 않아야함 */ {
    throw new Error(); /** 실행이 중단됨 */

    /** 반복문 잘못돌렸을때 */
}

/** never 타입은 보통 void 로 대체 됨 */

function WWW(param : string){
    if(typeof param === "string") {
        console.log(param)
    }
    else {
        console.log(param)
    }
}