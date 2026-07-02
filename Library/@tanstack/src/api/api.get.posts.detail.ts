import { BACKEN_API } from "./instance";

export async function API_CLIENT_GET_POSTS_DETAIL(id : string) {
    try {
        const api = await BACKEN_API(`posts/${id}`, {
            method : "get",
        });

        if(!api.ok) return null

        const result = await api.json() as POST_ITEM;

        return result
    }
    catch(err) { 
        console.log(err);
        throw err;
    }
}