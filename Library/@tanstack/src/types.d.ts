declare global {
    interface POST_ITEM {
        id : string,
        title : string,
        contents : string,
        isDelete : boolean,
        createdAt : string
    }

    interface PATCH_POST_ITEM {
        title : string,
        contents : string
    }

    interface INFINITY_RESPONSE_MODEL<T> {
        total : number,
        page : number,
        limit : number
        list : T
    }

    interface API_CLIENT_GET_POST_LIST {
        first: number; /** 현재 페이지 번호 */
        data: POST_ITEM[]; /** 현재 페이지의 데이터 목록 */
        last: number; /** 마지막 페이지 번호 */
        next: number | null; /** 다음 페이지 번호 (마지막 페이지인 경우 null) */
        pages: number; /** 전체 페이지 수 */
        prev: number | null; /** 이전 페이지 번호 (첫 페이지인 경우 null) */
        items: number; /** 전체 데이터 개수 */
    }

}

export {}