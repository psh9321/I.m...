const Engine = ((Loader, Core) => {
    const engine = {};

    const Config = engine.Config = {
        Init() {
            View.Init();
            Event.Init();
        }
    }

    const View = engine.View = {
        async Init() {
            const userInfo = await Loader.UserInfo.GetDataAPI();

            document.querySelector("[data-data=name]").textContent = `이름 : ${userInfo.name}`;
            document.querySelector("[data-data=job]").textContent = `직업 : ${userInfo.job}`;
            document.querySelector("[data-data=annual]").textContent = `연차 : ${userInfo.annual}`;
        }
    }

    const Event = engine.Event = {
        Init() {
            this.Display()
        },

        Display() {
            /** 유저 박스 배경색 변경 */
            document.querySelector("[data-display=btnColorList]").addEventListener("click", e => {
                const self = e.target.closest("[data-display=btnColor]");
                
                if(!self) return

                const color = self.value;
                Core.Display.SetUserInfoBackgroundColor(color)
            });

            /** 유저 박스 배경색 초기화 */
            document.querySelector("[data-display=btnReset]").addEventListener("click", () => {
                Core.Display.SetUserInfoBackgroundColor("")
            })

            document.querySelector("[data-display=btnDisplay]").addEventListener("click", e => {

                const self = e.currentTarget;
                /**
                 * @type {string} "row" : 가로 | "column" : 세로
                 */
                const displayStatus = Core.Display.SetUserInfoDisplayToggle();

                self.textContent = displayStatus === "row" ? "row 로 보기" : "column 으로 보기"
            })
        }

        

        
    }

    return engine
})(WebPackBundlerJS.Loader, WebPackBundlerJS.Core)