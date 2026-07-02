# Route Handler
 - Route Handler는 App Router에서 API를 구현하기 위한 서버 기능이다.
 - `app/api` 디렉터리의 `route.ts` 파일을 통해 HTTP 요청을 처리할 수 있다.
 - Route Handler는 App Router에서 API를 구현하기 위한 서버 기능이다.
 - app/api 디렉터리의 route.ts 파일을 통해 HTTP 요청을 처리한다.


## 사용 목적
 - REST API 구현
 - 외부 API 호출
 - 데이터베이스 접근
 - 사용자 인증 및 권한 검사
 - BFF(Backend For Frontend) 구현


## 장점
 - 프론트엔드와 서버 로직을 하나의 프로젝트에서 관리할 수 있다.
 - 브라우저에 노출되면 안 되는 비즈니스 로직을 서버에서 처리할 수 있다.
 - 외부 API와의 통신을 중앙에서 관리할 수 있다.
 - 인증, 헤더 설정, 응답 형식을 일관되게 관리할 수 있다.


## 폴더구조
```
    app
    └── api
        └── users
            └── route.ts
```


```typescript
    import { NextResponse } from "next/server";

    export async function GET() {
        return NextResponse.json({
            name: "Park",
        });
    }

    export async function POST(request: NextRequest) {
        const body = await request.json();

        return NextResponse.json(body);
    }
```