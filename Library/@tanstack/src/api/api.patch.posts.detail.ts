import { BACKEN_API } from "./instance";

export async function API_CLIENT_PATCH_POSTS_DETAIL(id : string, params : PATCH_POST_ITEM) {
    try {
        const api = await BACKEN_API(`posts/${id}`, {
            method : "patch",
            json : params
        });

        if(!api.ok) throw null

        const result = await api.json() as POST_ITEM;

        return result
    }
    catch(err) { 
        console.log(err);
        throw err;
    }
}