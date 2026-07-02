# SPA (Single Page Application)

 - 하나의 HTML 페이지에서 필요한 데이터만 비동기로 받아와 화면을 갱신하는 웹 애플리케이션 방식이다.
 - 페이지 이동 시 전체 HTML을 다시 요청하지 않고 JavaScript가 필요한 화면만 렌더링한다.

## 동작 방식

 1. 브라우저가 최초 HTML, CSS, JavaScript를 다운로드한다.
 2. JavaScript가 실행되어 SPA가 초기화된다.
 3. 페이지 이동 시 서버에 새로운 HTML을 요청하지 않는다.
 4. 필요한 데이터(API)만 요청하여 화면을 갱신한다.

```
최초 접속

Browser
    │
    ▼
 index.html
 main.js
 style.css
    │
    ▼
 React 실행

──────────────────────────────

페이지 이동

Browser
    │
    ▼
 API 요청
    │
    ▼
 JSON 응답
    │
    ▼
 Virtual DOM 비교
    │
    ▼
 필요한 부분만 화면 변경
```

## 장점

 - 빠른 페이지 전환
 - 필요한 부분만 다시 렌더링하여 사용자 경험(UX) 향상
 - 서버 요청 감소
 - 프론트엔드와 백엔드 역할을 분리하기 쉽다.

## 단점

 - 초기 JavaScript 번들 크기가 클 경우 첫 로딩이 느릴 수 있다.
 - JavaScript가 실행되어야 화면이 완성된다.
 - CSR만 사용하는 경우 SEO가 불리할 수 있다.
 - 브라우저 메모리 사용량이 증가할 수 있다.

## SPA와 MPA 비교

| SPA | MPA |
|------|------|
| 최초 한 번 HTML 로드 | 페이지마다 HTML 요청 |
| 페이지 이동 시 API 요청 | 페이지 이동 시 HTML 요청 |
| 빠른 화면 전환 | 페이지 이동마다 새로고침 |
| JavaScript 의존도가 높음 | 서버 렌더링 중심 |

## 대표적인 SPA Framework

 - React
 - Vue
 - Angular