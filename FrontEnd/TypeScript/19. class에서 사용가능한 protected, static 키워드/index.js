"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var QWE = /** @class */ (function () {
    function QWE(zzz) {
        this.eee = 10; /** 숫자 10만 들어올수 있고, extends 된 class 안에서 사용 가능 */
        this.qwe = zzz;
        this.vvv = "cxz";
    }
    QWE.y = 30; /** 숫자 30만 들어 갈수 있고 부모만 사용할수 있음 object 복사 기능 방지를 위한 키워드 */
    return QWE;
}());
var nnn = new QWE("qwe");
nnn.vvv = "park";
// nnn.qwe = "suhyun" /** private 속성이라 에러남. (근데 변경은 됨) */
// console.log(nnn)
var NewQWE = /** @class */ (function (_super) {
    __extends(NewQWE, _super);
    function NewQWE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewQWE.prototype.cb = function () {
        /** static ex) QWE.y */
    };
    return NewQWE;
}(QWE));
var 유저 = /** @class */ (function () {
    function 유저() {
        this.intro = "전문가임";
    }
    유저.skill = "developer";
    return 유저;
}());
var 나 = new 유저();
console.log(나);
