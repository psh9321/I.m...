# Cookies
 - `cookies()`는 Next.js App Router에서 쿠키를 조회하거나 저장하기 위한 서버 함수이다.
 - Server Component, Route Handler, Server Action에서 사용할 수 있다.
 - HttpOnly Cookie를 포함한 쿠키를 서버에서 안전하게 조회하고 관리할 수 있다.


## 언제 사용하는가?
 - 사용자 인증 정보 조회
 - AccessToken, RefreshToken 관리
 - 로그인 상태 확인
 - 사용자 설정 저장


## 쿠키저장
```ts
    async function SetCookies() {
        const cookie = await cookies();

        cookie.set("cookie-store", token, {
            httpOnly: true, /** 자바스크립트에서 쿠키를 읽지 못하게 한다. XSS 공격으로 부터 토큰을 탈취당할 위험을 줄임  */
            secure: process.env.NODE_ENV === "production", /** true 일시 https 환경에서만 쿠키가 전송 되도록한다. */
            sameSite: "lax", /** 다른 사이트에서 오는 요청에 쿠키 전송을 제한하여 CSRF 공격을 줄일 수 있다. */
            path: "/" /** 쿠키를 전송할 URL 경로를 지정한다. */
        })
    }
```


## 쿠키조회
```ts
    import { cookies } from "next/headers";

    async function GetCookies() {
        const cookie = await cookies();

        /**
         * {
         *    name: "cookie-store",
         *    value: "저장한값"
         * }
        */
        const item = cookie.get("cookie-store");

        return item?.["value"]
    }

```


## 쿠키삭제
```ts
    import { cookies } from "next/headers";

    async function DeleteCookies() {
        const cookie = await cookies();

        cookie.delete("cookie-store");
    }

```