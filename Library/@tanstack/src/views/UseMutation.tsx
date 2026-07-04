import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"

import { API_CLIENT_POST_POSTS_ADD } from "../api/api.post.posts";

export const UseMutation = () => {

    const { mutateAsync } = useMutation({
        mutationKey : ["mutation", "add"],
        mutationFn : (param : { title : string, contents : string }) => API_CLIENT_POST_POSTS_ADD(param),
        /**
         * mutation 이 성공적으로 완료된 직후 호출되는 콜백
         * @param data mutationFn이 반환한 응답 데이터
         * @param variables mutate() 호출 시 전달한 값
         * @param onMutateResult onMutate()에서 반환한 값 (낙관적 업데이트 복구 등에 사용)
         * @param context MutationFunctionContext (queryClient, mutationKey, meta 등)
         */
        onSuccess(data, variables, onMutateResult, context) {
            context.client.invalidateQueries({queryKey : ["posts","list"]});
            navigation("/");
        },
        /**
         * mutation 실행 중 에러가 발생했을 때 호출되는 콜백
         * @param error mutationFn에서 발생한 에러 객체
         * @param variables mutate() 호출 시 전달한 값
         * @param onMutateResult onMutate()에서 반환한 값 (낙관적 업데이트 복구 등에 사용)
         * @param context MutationFunctionContext (queryClient, mutationKey, meta 등)
         */
        onError(error, variables, onMutateResult, context) {
            alert("등록 실패")
        },
    })

    const navigation = useNavigate();

    const inputTitleRef = useRef<HTMLInputElement>(null);
    const inputContentsRef = useRef<HTMLTextAreaElement>(null);

    function OnClickAddCallback() {
        if(!inputTitleRef.current) return
        if(!inputContentsRef.current) return

        const title = inputTitleRef.current.value;
        const contents = inputContentsRef.current.value;

        if(!title || !contents) return 

        mutateAsync({title, contents})
    }

    return (
        <>
            <h1 className="h-[50px] leading-[50px] text-[1.3rem] font-bold">useMutation</h1>
            <section className="my-[10px]">
                <h2 className="flex items-center text-[0.8rem]">게시물 등록 페이지</h2>
                <ul className="mt-[30px] space-y-[30px] [&>li>label]:inline-block [&>li>label]:mb-[5px]">
                    <li>
                        <label htmlFor="inputTitle">제목</label>
                        <input ref={inputTitleRef} className="w-full h-[35px] px-[10px] border rounded-[5px]" id="inputTitle" type="text" />
                    </li>
                    <li>
                        <label htmlFor="inputContents">내용</label>
                        <textarea ref={inputContentsRef} className="w-full min-h-[50px] max-h-[150px] p-[10px] border rounded-[5px] break-keep resize-none" id="inputContents" />
                    </li>
                </ul>
                
                <button className="mt-[30px] p-[10px_20px] border rounded-[5px] cursor-pointer" onClick={OnClickAddCallback}>
                    등록
                </button>

            </section>
        </>
    )
}