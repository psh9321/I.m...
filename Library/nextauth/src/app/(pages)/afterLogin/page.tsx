import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

import AfterLoginPageView from "./_view"

const AfterLoginPageServer = async () => {
    const session = await getServerSession(authOptions);

    if(!session) return redirect("/");
    
    return (
        <>
            <AfterLoginPageView/>
        </>
    )
}

export default AfterLoginPageServer