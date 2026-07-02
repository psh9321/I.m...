# App Router
 - Next.js 13부터 도입된 새로운 파일 시스템 기반 라우팅 방식이다.
 - `app` 디렉터리를 기준으로 URL이 자동 생성된다.
 - React Server Component(RSC)를 기본으로 사용하며, 필요한 경우 `"use client"`를 선언하여 Client Component를 사용할 수 있다.
 - Layout, Loading, Error, Route Handler 등 다양한 파일 규칙을 제공하여 화면과 서버 로직을 구조적으로 관리할 수 있다.


## 주요 특징
 - 파일 시스템 기반 라우팅
 - Server Component 기본 지원
 - Client Component 지원(`"use client"`)
 - Nested Layout 지원
 - Loading UI 지원
 - Error Boundary 지원
 - Route Handler(API) 지원
 - Parallel Route, Intercepting Route 지원