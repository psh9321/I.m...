export class Display {
    /**
     * 유저 정보 UI 수정
     * @returns {string} "row" : 가로 | "column" : 세로
     */
    SetUserInfoDisplayToggle() {

        const element = document.querySelector("[data-layout=user-info-box]");

        const currentDisplay = element.style.display;

        element.style.display = currentDisplay === "flex" ? "" : "flex";

        return currentDisplay === "flex" ? "row" : "column"
    }

    /**
     * 유저 정보 UI 백그라운드 컬러 수정
     * @param {string} color hex code or color name
     */
    SetUserInfoBackgroundColor(color) {
        document.querySelector("[data-layout=user-info-box]").style.backgroundColor = color;
    }  
}