"use client"

import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";

const BeforeLoginPageView = () => {

    const popupRef = useRef<Window | null>(null);

    function SSOLoginPopupCallcack(type : "kakao" | "naver" | "google") {

        const callbackUrl = encodeURIComponent(`${window.location.origin}/social-login-popup/popup-callback`);
        const url = `/social-login-popup/login-redirect?provider=${type}&callbackUrl=${callbackUrl}`;

        const width = 550;
        const height = 550;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        if (popupRef.current && !popupRef.current.closed) {
            popupRef.current.focus();
            return;
        }

        popupRef.current = window.open(
            url,
            "socialLogin",
            `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
        );
    }

    useEffect(() => {
        function handleMessage(event: MessageEvent) {
            if (event.origin !== window.location.origin) return;
            if (event.data?.type === "SOCIAL_LOGIN_SUCCESS") {
                window.location.reload();
            }
        }

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <>
            <h1>로그인 전</h1>
            <div className="flex gap-[20px] mt-[20px] px-[10px] [&>button]:border-b [&>button]:border-b-transparent [&>button]:cursor-pointer [&>button:hover]:border-b-[#fff]">
                <button onClick={() => SSOLoginPopupCallcack("google")}>구글로그인 (팝업 형식)</button>
                <button onClick={() => SSOLoginPopupCallcack("naver")}>네이버로그인 (팝업 형식)</button>
                <button onClick={() => SSOLoginPopupCallcack("kakao")}>카카오로그인 (팝업 형식)</button>
            </div>
            <div className="flex gap-[20px] mt-[20px] px-[10px] [&>button]:border-b [&>button]:border-b-transparent [&>button]:cursor-pointer [&>button:hover]:border-b-[#fff]">
                <button onClick={() => signIn("google", { callbackUrl : `${window.location.origin}/afterLogin?type=redirect-google` })}>구글로그인 (리다이렉트 형식)</button>
                <button onClick={() => signIn("naver", { callbackUrl : `${window.location.origin}/afterLogin?type=redirect-naver` })}>네이버로그인 (리다이렉트 형식)</button>
                <button onClick={() => signIn("kakao", { callbackUrl : `${window.location.origin}/afterLogin?type=redirect-kakao` })}>카카오로그인 (리다이렉트 형식)</button>
            </div>
        </>
    )
}

export default BeforeLoginPageView