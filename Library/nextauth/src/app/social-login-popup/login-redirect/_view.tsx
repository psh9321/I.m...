"use client"
import { useSearchParams } from "next/navigation"

import { useEffect, useRef } from "react"

import { getCsrfToken } from "next-auth/react"

const LoginRedirectPageView = () => {
    const searchParams = useSearchParams();
    const provider = searchParams.get("provider");
    const callbackUrl = searchParams.get("callbackUrl") ?? "/";
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        getCsrfToken().then((csrfToken) => {
            
            if (!formRef.current || !csrfToken) return;
            const input = formRef.current.querySelector<HTMLInputElement>('input[name="csrfToken"]')
            if (input) {
                input.value = csrfToken;

                formRef.current.submit();
            }
        })
    }, []);

    return (
        <>
            <h1 className="sr-only">소셜 로그인 팝업 페이지</h1>
            <section className="mt-[150px] text-center">
                <h2>소셜 로그인</h2>
                <article className="inline-flex flex-col justify-center items-center gap-[10px] w-[280px] h-[160px] text-[#B6B5B8] border-[#31333A] rounded-[10px]">
                    <h2 className="mt-[20px] text-[2rem]">로그인 중...</h2>
                    <div>{provider?.toUpperCase()} 소셜로그인</div>
                </article>
            </section>
            <form className="hidden" ref={formRef} method="post" action={`/api/auth/signin/${provider}`}>
                <input type="hidden" name="csrfToken" defaultValue="" />
                <input type="hidden" name="callbackUrl" defaultValue={callbackUrl} />
            </form>
        </>
    )
}

export default LoginRedirectPageView