"use strict";
var title = document.getElementById("title");
var txt = document.getElementById("txt");
var btn = document.getElementById("btn");
var link = document.getElementById("link");
var img = document.getElementById("img");
// if(title) title.innerHTML = "bbb";
if (title instanceof Element)
    title.innerHTML = "ccc";
/** a태그는 이렇게 해야함 html 태그 마다 타입이 있음 */
if (link instanceof HTMLAnchorElement)
    link.href = "https://www.daum.net";
var imgChangeCallback = function () {
    if (!(img instanceof HTMLImageElement))
        return;
    img.src = "./profile.jpeg";
};
// if(btn instanceof HTMLButtonElement) {
//     btn.addEventListener("click", imgChangeCallback)
// }
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", imgChangeCallback);
document.querySelectorAll(".btnLink").forEach(function (el) {
    if (el instanceof HTMLAnchorElement) {
        el.href = "https://www.naver.com";
        el.target = "_blank";
    }
});
