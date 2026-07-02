import { useInfiniteQuery } from "@tanstack/react-query"
import { API_CLIENT_GET_POSTS_LIST } from "../api/api.get.posts.list"
import { useInterSectionObserver } from "../useInterSectionObserver";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export const UseInfinityQuery = () => {

    const { data, isFetching, isLoading, hasNextPage, fetchNextPage  } = useInfiniteQuery({
        queryKey : ["posts", "list"],
        queryFn : ({pageParam}) => API_CLIENT_GET_POSTS_LIST(pageParam, 5),
        initialPageParam : 1,
        getNextPageParam : (lastPage, _, pageParams) => {
            if(!lastPage) return undefined;

            if(lastPage instanceof Error) return undefined;

            const { next } = lastPage;
            
            return next ? pageParams+1 : undefined
        }
    });

    const { ref, isView } = useInterSectionObserver({
        threshold : 0
    });

    useEffect(() => {
        if(isLoading) return 
        if(isFetching) return 
        if(!hasNextPage) return
        if(!isView) return

        fetchNextPage()
    },[isView]);


    return (
        <>
            <h1 className="h-[50px] leading-[50px] text-[1.3rem] font-bold">useInfiniteQuery</h1>
            <ol className="w-full h-[calc(100%-50px)] py-[10px] space-y-[15px] overflow-y-auto">
                {
                    data?.pages.map(page => {
                        
                        return page?.data.map((el, i) => {
                            return (
                                <li className="border rounded-[10px] overflow-hidden" key={`infinity-query-data-${el.title}-${i}`}>
                                    <Link className="block p-[20px] hover:text-[#fff] hover:bg-[rgba(0,0,0,0.6)]" to={`/detail/${el.id}`}>
                                        <dl className="break-keep">
                                            <dt className="mb-[20px]">{el.title}</dt>
                                            <dd className="text-[0.9rem]">{el.contents}</dd>
                                        </dl>
                                    </Link>
                                </li>
                            )
                        })
                    })
                }
                <li ref={ref} style={{height : "1px"}}></li>
            </ol>
        </>

    )
}