# SSG (static Site Generation)
 - 빌스 시점에 HTML 을 미리 생성해 두고, 사용자가 요청하면 이미 만들어진 HTML 파일을 바로 응답하는 렌더링방식
 - 요청마다 달라지는 서버 동작(쿠키, 세션, 헤더, no-store 데이터 조회 등)이 없어야 한다.
 - 개념적으로 HTTP GET 요청에서 HTML 파일을 그대로 내려주는것과 같다.


## 동작 과정
 1. 사이트 생성 (npm run build)
 2. HTML 파일 생성
 3. 서버에 배포
 4. 사용자 GET 요청
 5. 미리 생성된 HTML 응답
 6. 브라우저 렌더링