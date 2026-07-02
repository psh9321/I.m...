"use strict";
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var me = new Human("su hyun");
/** homework01 */
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var 소나타 = new Car("소나타", 4300);
// console.log(소나타.tax())
/** homework02 */
var Word = /** @class */ (function () {
    function Word() {
        var args = []; /** 모든 유형의 자료 */
        for (var _i = 0 /** 모든 유형의 자료 */; _i < arguments.length /** 모든 유형의 자료 */; _i++ /** 모든 유형의 자료 */) {
            args[_i] = arguments[_i]; /** 모든 유형의 자료 */
        }
        this.numberArr = [];
        this.stringArr = [];
        this.exceptionArr = [];
        if (args.length <= 0)
            return;
        for (var i = 0; i < args.length; i++) {
            var item_1 = args[i];
            switch (typeof item_1) {
                case "number":
                    this.numberArr.push(item_1);
                    break;
                case "string":
                    this.stringArr.push(item_1);
                    break;
                default:
                    this.exceptionArr.push(item_1);
                    break;
            }
        }
    }
    return Word;
}());
var homework02 = new Word(1, "2", 3, 4, false, undefined, "77");
console.log(homework02);
