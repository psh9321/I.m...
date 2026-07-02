import { BACKEN_API } from "./instance";

export async function API_CLIENT_POST_POSTS_ADD(params : {
    title : string,
    contents : string
}) {
    try {
        const api = await BACKEN_API("posts", {
            method : "post",
            json : {
                ...params,
                isDelete : true,
                createdAt : new Date().toISOString()
            }
        });

        if(!api.ok) throw null

        const result = await api.json();

        return result
    }
    catch(err) { 
        console.log(err);
        throw err;
    }
}