declare class QWE {
    private qwe; /** 클래스 내부에서만 사용할 값. 클래스 외부에서 수정을 하면 에러남. extends 된 class 안에서 사용 불가 */
    vvv: string;
    protected eee: number; /** 숫자 10만 들어올수 있고, extends 된 class 안에서 사용 가능 */
    static y: number; /** 숫자 30만 들어 갈수 있고 부모만 사용할수 있음 object 복사 기능 방지를 위한 키워드 */
    constructor(zzz: string);
}
declare const nnn: QWE;
declare class NewQWE extends QWE {
    cb(): void;
}
declare class 유저 {
    static skill: string;
    intro: string;
}
declare let 나: 유저;
