"use strict";
;
var square = { color: "black", width: 34 };
;
;
var student = { name: "suhyun" };
var teacher = { name: "suhyun", age: 32 };
var item = {
    brand: "apple",
    serialNumber: 1994,
    model: ["iphone15", "airpods pro2"]
};
var items = [
    { product: "iphone", price: 1250000 },
    { product: "airpods", price: 450000 }
];
var items02 = {
    product: "macbook",
    price: 3600000,
    card: true
};
var Class01 = /** @class */ (function () {
    function Class01(a, b) {
        this.a = a;
        this.b = b;
    }
    Class01.prototype.plus = function () {
        return this.a + this.b;
    };
    Class01.prototype.minus = function () {
        return this.a - this.b;
    };
    return Class01;
}());
var vvv = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
