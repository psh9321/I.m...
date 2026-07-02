"use strict";
function 함수우(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly;
}
console.log(함수우({ swim: "true" }));
function 함수2(x) {
    if (x.wheel === "4개") {
        console.log("\uC774 \uCC28\uB294 ".concat(x.color));
    }
    else {
        console.log("\uC774 \uBC14\uC774\uD06C\uB294 ".concat(x.color));
    }
}
