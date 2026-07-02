# CSR (Client Side Rendering)
 - 브라우저(Client)에서 JavaScript를 실행하여 화면을 렌더링하는 방식이다.
 - 최초에는 최소한의 HTML과 JavaScript 번들을 내려받고, JavaScript가 실행된 후 API를 호출하여 화면을 구성한다.
 - 페이지 이동 시 필요한 데이터만 갱신하므로 SPA(Single Page Application)에서 주로 사용된다.


## 동작 과정
 1. 브라우저가 서버에 페이지를 요청한다.
 2. 서버는 최소한의 HTML과 JavaScript 번들을 응답한다.
 3. 브라우저가 JavaScript를 다운로드하고 실행한다.
 4. API를 호출하여 필요한 데이터를 가져온다.
 5. React가 Virtual DOM을 생성하고 화면을 렌더링한다.


## 장점
 - 초기 화면 표시(FCP)가 빠르다.
 - 검색 엔진이 HTML을 바로 수집할 수 있어 SEO에 유리하다.
 - SNS 공유(Open Graph) 메타데이터 제공에 적합하다.
 - JavaScript 실행 전에도 사용자가 화면을 확인할 수 있다.


## 단점
 - 요청마다 서버에서 렌더링을 수행하므로 서버 부하가 증가할 수 있다.
 - 페이지 이동마다 서버 렌더링이 수행될 수 있다.
 - Hydration 과정이 필요하다.
 - 사용자 수가 많아질수록 서버 성능에 영향을 받을 수 있다.