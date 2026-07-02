class QWE {
    private qwe : string  /** 클래스 내부에서만 사용할 값. 클래스 외부에서 수정을 하면 에러남. extends 된 class 안에서 사용 불가 */
    vvv : string

    protected eee = 10; /** 숫자 10만 들어올수 있고, extends 된 class 안에서 사용 가능 */

    public static y = 30 /** 숫자 30만 들어 갈수 있고 부모만 사용할수 있음 object 복사 기능 방지를 위한 키워드 */

    constructor(zzz : string) {
        this.qwe = zzz
        this.vvv = "cxz"
    }
}

const nnn = new QWE("qwe");

nnn.vvv = "park"
// nnn.qwe = "suhyun" /** private 속성이라 에러남. (근데 변경은 됨) */

// console.log(nnn)

class NewQWE extends QWE {
    cb() {
        /** static ex) QWE.y */
    }
    /**
     * protected 쓰면 extends 된 class 안에서 사용가능
     * private 는 사용불가
     */
}

class 유저 {
    static skill = "developer"
    intro = "전문가임"

}

let 나 = new 유저()

console.log(나)