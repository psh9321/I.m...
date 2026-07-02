export class User {
    /**
     * @returns {Object}
     * @property {string} name 
     * @property {string} job 
     * @property {string} annual
     */
    async GetDataAPI() {
        return {
            name : "박수현",
            job : "Developer",
            annual : 4
        }
    }
}