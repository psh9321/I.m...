import { BACKEN_API } from "./instance";

export async function API_CLIENT_GET_POSTS_LIST(_page : number, _per_page : number) {
    try {
        const api = await BACKEN_API(`posts`, {
            method : "get",
            searchParams : {
                _page,
                _per_page,
                _sort: "createdAt",
            }
        });

        if(!api.ok) return null

        const result = await api.json() as API_CLIENT_GET_POST_LIST;

        return result
    }
    catch(err) { 
        console.log(err);
        throw err;
    }
}