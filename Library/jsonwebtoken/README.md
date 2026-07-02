# jsonwebtoken
 - jsonwebtoken은 JWT(JSON Web Token)를 생성(Create), 검증(Verify), 복호화(Decode) 할 수 있는 Node.js 라이브러리이다.
 - 로그인 인증(Authentication)과 권한 인가(Authorization)에서 가장 많이 사용된다.
 - 토큰 내부의 Payload는 암호화되지 않으며(Base64URL 인코딩), 서명을 통해 위변조 여부를 검증한다.
 - https://www.jwt.io/ 에서 복호화 가능


## 설치
 - npm i jsonwebtoken
 - pnpm add jsonwebtoken
 - (typescript 환경에서) npm i -D @types/jsonwebtoken
 - (typescript 환경에서) pnpm add -D @types/jsonwebtoken