import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

import { SessionProvider } from "../../provider/SessionProvider";

const PageRoot = async ({ children } : LAYOUT_CHILD) => {
    const session = await getServerSession(authOptions);

    return (
        <SessionProvider session={session}>
            <main>{children}</main>
        </SessionProvider>
    )
}

export default PageRoot