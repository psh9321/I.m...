"use client"

import { useSessionHook } from "@/hook/useSessionHook"
import { signOut } from "next-auth/react"

const AfterLoginPageView = () => {
    function OnClickLogoutCallback() {
        signOut()
    }
    

    const { user } = useSessionHook();

    console.log(user)
    return (
        <>
            <h1 className="mt-[30px] ml-[15px]">로그인 함</h1>
            <dl className="mt-[30px] ml-[15px]">
                <dt>
                    {user?.name}
                </dt>
                <dd>
                    {user?.provider}
                </dd>
            </dl>
            <button className="mt-[30px] ml-[30px] p-[10px_20px] border rounded-[10px]" onClick={OnClickLogoutCallback}>로그아웃</button>
        </>
    )
}

export default AfterLoginPageView