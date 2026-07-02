const title = document.getElementById("title");
const txt = document.getElementById("txt");
const btn = document.getElementById("btn");
const link = document.getElementById("link");
const img = document.getElementById("img");

// if(title) title.innerHTML = "bbb";
if(title instanceof Element) title.innerHTML = "ccc";

/** a태그는 이렇게 해야함 html 태그 마다 타입이 있음 */
if(link instanceof HTMLAnchorElement) link.href = "https://www.daum.net";


/** homeword01 */
type ImgChangeType = () => void;

const imgChangeCallback : ImgChangeType = () => {
    if(!(img instanceof HTMLImageElement)) return 

    img.src = "./profile.jpeg"
}

// if(btn instanceof HTMLButtonElement) {
//     btn.addEventListener("click", imgChangeCallback)
// }
btn?.addEventListener("click", imgChangeCallback);



document.querySelectorAll(".btnLink").forEach(el => {
    if(el instanceof HTMLAnchorElement) {
        el.href = "https://www.naver.com";
        el.target = "_blank"

    }
})