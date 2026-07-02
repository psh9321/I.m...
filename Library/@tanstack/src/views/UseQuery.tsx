import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery, type InfiniteData } from "@tanstack/react-query";

import { API_CLIENT_GET_POSTS_DETAIL } from "../api/api.get.posts.detail";
import { API_CLIENT_PATCH_POSTS_DETAIL } from "../api/api.patch.posts.detail";
import { API_CLIENT_DELETE_POSTS } from "../api/api.delete.posts";

export const UseQueryPageView = () => {

    const { id } = useParams<{id : string}>();

    const navigation = useNavigate();

    const { data } = useQuery({
        queryKey : ["posts","detail",id],
        queryFn : () => API_CLIENT_GET_POSTS_DETAIL(id as string)
    });

    const inputTitleRef = useRef<HTMLInputElement>(null);
    const inputContentsRef = useRef<HTMLTextAreaElement>(null);

    const { mutateAsync : EditPostItemCallback } = useMutation({
        mutationKey : ["mutation","edit","detail",id],
        mutationFn : (params : PATCH_POST_ITEM) => API_CLIENT_PATCH_POSTS_DETAIL(id as string, params),
        /**
         * mutation 이 성공적으로 완료된 직후 호출되는 콜백
         * @param data mutationFn이 반환한 응답 데이터
         * @param variables mutate() 호출 시 전달한 값
         * @param onMutateResult onMutate()에서 반환한 값 (낙관적 업데이트 복구 등에 사용)
         * @param context MutationFunctionContext (queryClient, mutationKey, meta 등)
         */
        onSuccess(data, variables, onMutateResult, context) {
            console.log("data",data)
            console.log("variables",variables)
            console.log("onMutateResult",onMutateResult)
            console.log("context",context)

            /** 현재 캐싱된 상세 페이지 데이터 수정 */
            context.client.setQueryData(["posts","detail",id], data);

            /** 
             * 수정 시 목록에 있는 데이터를 모두 무효화 할 필요 없이 해당 쿼리 데이터만 수정 하도록 하는게 훨씬 효율적
             * 만약 무효화를 한다면 목록을 4페이지 불러왔을시 목록 API 를 4번 호출함으로 비효율
             */
            context.client.setQueryData<InfiniteData<API_CLIENT_GET_POST_LIST>>(["posts", "list"], (prev) => {
                if (!prev) return prev

                return {
                    ...prev,
                    pages : prev.pages.map(page => ({
                        ...page,
                        data : page.data.map(el => 
                            el.id === id ? data : el
                        )
                    }))
                }
            })
        },
        /**
         * mutation 실행 중 에러가 발생했을 때 호출되는 콜백
         * @param error mutationFn에서 발생한 에러 객체
         * @param variables mutate() 호출 시 전달한 값
         * @param onMutateResult onMutate()에서 반환한 값 (낙관적 업데이트 복구 등에 사용)
         * @param context MutationFunctionContext (queryClient, mutationKey, meta 등)
         */
        onError(error, variables, onMutateResult, context) {
            console.log("error",error)
            console.log("variables",variables)
            console.log("onMutateResult",onMutateResult)
            console.log("context",context) 

            
            // /** 실패 시 이전 데이터로 복구 */
            // context.client.setQueryData(["posts","detail",id], data);
        },
    })

    const { mutateAsync : DeletePostsCallback } = useMutation({
        mutationKey : ["mutation","delete","detail",id],
        mutationFn : () => API_CLIENT_DELETE_POSTS(id as string),
        onSuccess(data, variables, onMutateResult, context) {
            context.client.invalidateQueries({queryKey : ["posts","list"]});
            navigation("/")
        },
        onError(error, variables, onMutateResult, context) {
            
        },
    })

    function OnClickEditCallback() {
        if(!data) return
        if(!inputTitleRef.current) return
        if(!inputContentsRef.current) return

        const newTitle = inputTitleRef.current.value;
        const newContents = inputContentsRef.current.value;

        if(data.title === newTitle && data.contents === newContents) return
        
        const params = {
            title : newTitle,
            contents : newContents
        }

        EditPostItemCallback(params);
    }

    function OnClickDeleteCallback() {

        if(confirm("삭제?")) DeletePostsCallback()
        
    }

    return (
        <>
            <h1 className="h-[50px] leading-[50px] text-[1.3rem] font-bold">useQuery / useMutation</h1>
            <section className="my-[10px]">
                <h2 className="flex items-center text-[0.8rem]"> <strong className="mr-[5px] underline">{ `"${data?.title}"` }</strong> 상세 페이지</h2>
                <ul className="mt-[30px] space-y-[30px] [&>li>label]:inline-block [&>li>label]:mb-[5px]">
                    <li>
                        <label htmlFor="inputTitle">제목</label>
                        <input ref={inputTitleRef} className="w-full h-[35px] px-[10px] border rounded-[5px]" id="inputTitle" type="text" defaultValue={data?.title} />
                    </li>
                    <li>
                        <label htmlFor="inputContents">내용</label>
                        <textarea ref={inputContentsRef} className="w-full min-h-[50px] max-h-[150px] p-[10px] border rounded-[5px] break-keep resize-none" id="inputContents" defaultValue={data?.contents} />
                    </li>
                </ul>
                
                <div className="flex gap-[10px] mt-[30px] [&>button]:p-[10px_20px] [&>button]:border [&>button]:rounded-[5px] [&>button]:cursor-pointer
                ">
                    <button className="" onClick={OnClickEditCallback}>
                        수정
                        <span className="ml-[5px]">(use Mutations)</span>
                    </button>
                    {
                        data?.isDelete && <button onClick={OnClickDeleteCallback}>삭제</button>
                    }
                </div>
            </section>
        </>

    )
}