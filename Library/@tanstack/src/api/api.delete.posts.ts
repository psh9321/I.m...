import { BACKEN_API } from "./instance";

export async function API_CLIENT_DELETE_POSTS(id : string) {
    try {
        const api = await BACKEN_API(`posts/${id}`, {
            method : "delete"
        });

        if(!api.ok) throw api.statusText

        const result = await api.json();
        
        return result
    }
    catch(err) { 
        console.log(err);
        throw err;
    }
}