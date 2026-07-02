## HTTP
 - 웹 브라우저와 서버가 데이터를 주고받기 위한 프로토콜이다.
 - 기본 포트는 80이다.
 - 데이터를 평문으로 전송하므로 보안에 취약하다.
 - REST API의 기반 프로토콜이다.
 - Stateless(무상태) 프로토콜이므로 요청 간 상태를 저장하지 않는다.

### Header
Authorization 
  - 서버에 인증 정보를 전달하기 위한 요청(Request) 헤더이다.
  - 주로 JWT, OAuth Access Token 등을 전달할 때 사용한다.
  - 대표적으로 Bearer 인증 방식을 많이 사용한다.


Content-Type 
  - 요청(Request) 또는 응답(Response) 데이터의 형식을 나타내는 헤더이다.
  - 서버와 클라이언트가 데이터 형식을 올바르게 해석할 수 있도록 한다.
  | Content-Type                      | 설명           |
| --------------------------------- | ------------ |
| application/json                  | JSON 데이터     |
| multipart/form-data               | 파일 업로드       |
| application/x-www-form-urlencoded | HTML Form 전송 |
| text/plain                        | 일반 텍스트       |
| text/html                         | HTML 문서      |


Content-Type과 Accept의 차이
  - Content-Type(내가 보내는 데이터 형식): 내가 보내는 데이터의 형식을 나타낸다.
  - Accept(내가 받고 싶은 데이터 형식): 받고 싶은 응답의 형식을 나타낸다.


Cookie
  - 브라우저가 저장한 쿠키 정보를 서버로 전달하는 요청(Request) 헤더이다.
  - 로그인 세션, JWT, 사용자 설정 등을 서버에 전달할 때 사용한다.
  ```
    Cookie: accessToken=abc123; refreshToken=xyz456
  ```


Accept
  - 클라이언트가 응답으로 받고 싶은 데이터 형식을 서버에 전달하는 요청(Request) 헤더이다.
  - 서버는 가능한 경우 해당 형식에 맞는 데이터를 반환한다.
  ```
    Accept: application/json
  ```

| Header        | 역할              | 요청/응답              |
| ------------- | --------------- | ------------------ |
| Authorization | 인증 정보(JWT 등) 전달 | Request            |
| Content-Type  | 데이터 형식 지정       | Request / Response |
| Cookie        | 저장된 쿠키 전달       | Request            |
| Accept        | 원하는 응답 형식 전달    | Request            |


### Method 
 - GET : 리소스 조회
 - POST : 리소스 생성 
 - DELETE : 리소스 삭제
 - PATCH : 리소스 부분 수정
 - PUT : 리소스 전체 수정


### Status Code 
| Code | 의미                  |
| ---- | ------------------- |
| 200  | 요청 성공               |
| 201  | 생성 성공               |
| 204  | 성공(응답 본문 없음)        |
| 400  | 잘못된 요청(Bad Request) |
| 401  | 인증 필요(Unauthorized) |
| 403  | 권한 없음(Forbidden)    |
| 404  | 리소스를 찾을 수 없음        |
| 500  | 서버 내부 오류            |


## HTTPS
 - HTTP에 SSL/TLS 암호화를 적용한 프로토콜이다.
 - 기본 포트는 443이다.
 - 데이터가 암호화되어 전송된다.
 - 인증서(Certificate)가 필요하다.
 - 현재 대부분의 서비스는 HTTPS를 사용한다.


## CORS
 - Cross-Origin Resource Sharing의 약자이다.
 - 다른 Origin의 서버에 접근할 수 있도록 브라우저가 제공하는 보안 정책이다.
 - 브라우저에서만 적용되며 서버 간 통신(Server to Server)에는 적용되지 않는다.
 - 서버가 Access-Control-Allow-Origin 등의 헤더를 통해 허용 여부를 결정한다.
 - 단순 요청(Simple Request)과 Preflight(OPTIONS) 요청이 존재한다.
 - 브라우저가 응답 헤더를 확인하여 접근 허용 여부를 판단한다.