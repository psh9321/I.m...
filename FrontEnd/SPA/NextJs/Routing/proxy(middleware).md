# Proxy (Middleware)
 - Next.js에서 요청(Request)이 Route에 도달하기 전에 실행되는 서버 측 기능이다.
 - 인증, 권한 검사, 리다이렉트, URL 재작성(Rewrite) 등 공통 요청 처리를 중앙에서 수행할 수 있다.
 - Next.js 16부터 Middleware는 Proxy로 명칭이 변경되었다.


## 장점
 - 공통 요청 처리를 중앙에서 관리할 수 있다.
 - 페이지와 API에서 동일한 인증 로직을 재사용할 수 있다.
 - 인증되지 않은 요청을 Route 실행 전에 차단할 수 있다.
 - 불필요한 페이지 렌더링을 줄여 성능과 보안을 향상시킬 수 있다.


## 동작 과정
 1. 브라우저가 서버에 요청을 보낸다.
 2. Proxy가 가장 먼저 요청을 가로채 실행된다.
 3. 요청을 검사하거나 수정한다.
 4. 필요하면 Redirect, Rewrite, 응답(Response)을 반환한다.
 5. 정상 요청이면 Route(Page, API)로 전달된다.


## matcher
 - matcher에 지정한 URL 경로로 요청이 들어오는 경우에만 Proxy(Middleware)가 실행된다.
 - :path 의 의미 : {name}/ 의 하위의 모든 경로
 - matcher 가 없으면 모든 도메인에서 Proxy(Middleware) 가 실행된다.
```typescript
    import { NextResponse } from "next/server";
    import type { NextRequest } from "next/server";

    export function proxy(request: NextRequest) {
        const token = request.cookies.get("accessToken");

        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        return NextResponse.next();
    }

    export const config = {
        matcher: ["/admin/:path*", "/mypage/:path*"],
    };
```