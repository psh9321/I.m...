import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"

import { API_CLIENT_POST_POSTS_ADD } from "../api/api.post.posts";

export const UseMutation = () => {

    const { mutateAsync } = useMutation({
        mutationKey : ["mutation", "add"],
        mutationFn : (param : { title : string, contents : string }) => API_CLIENT_POST_POSTS_ADD(param),
        onSuccess(data, variables, onMutateResult, context) {
            context.client.invalidateQueries({queryKey : ["posts","list"]});
            navigation("/");
        },
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