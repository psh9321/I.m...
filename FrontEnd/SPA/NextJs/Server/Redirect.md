# Redirect
 - `redirect()`는 Next.js App Router에서 다른 URL로 이동시키기 위한 서버 함수이다.
 - Server Component, Route Handler, Server Action에서 사용할 수 있다.
 - 주로 로그인 여부 확인, 권한 검사 등 서버에서 페이지 이동이 필요한 경우 사용한다.

```tsx
    import { redirect } from "next/navigation";

    const MyPageServer = () => {
        const isLogin = false;

        /** redirect() 호출 시 현재 렌더링이 즉시 중단되므로 아래 코드는 실행되지 않음. */
        if (!isLogin) redirect("/login");

        return <div>Home</div>;
    }

    export default MyPageServer
```