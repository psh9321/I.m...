const index = {
    Config : {
        isInit : false,
        arr : [],
        
        Init() {
            this.isInit = true;

            this.Set();
        },

        Set() {
            for(let i = 0; i < 5; i++) {
                this.arr.push(`index-${i}`)
            }
        }
    }
}