import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

import BeforeLoginPageView from "./_view"

const BeforeLoginPageServer = async () => {
    const session = await getServerSession(authOptions);

    if(session) return redirect("/afterLogin");

    return (
        <>
            <BeforeLoginPageView/>
        </>
    )
}

export default BeforeLoginPageServer