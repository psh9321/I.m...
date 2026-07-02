const index2 = {
    Config : {
        isInit : false,
        arr : [],
        
        Init() {
            this.isInit = true;

            this.Set();
        },

        Set() {
            for(let i = 0; i < 5; i++) {
                this.arr.push(`index2-${i}`)
            }
        }
    }
}