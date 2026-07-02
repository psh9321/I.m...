import ky from "ky";

export const BACKEN_API = ky.create({
    
    prefix : `http://localhost:9999` ,
    // headers : {
    //     "Content-Type" : "application/json"
    // },
    hooks : {
        beforeRequest : [
            async ({request}) => {
                
                return request
            }
        ],

        beforeError : [
            async ({error}) => {
                return error
            }
        ],

        afterResponse : [
            async ({response}) => {
                return response
            }
        ],

    }
})