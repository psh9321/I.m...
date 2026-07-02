# crypto-js
 - CryptoJS는 JavaScript에서 암호화(Encryption), 복호화(Decryption), 해시(Hash) 등을 수행할 수 있는 라이브러리이다.
 - 브라우저와 Node.js 환경에서 모두 사용할 수 있다.
 - 주로 토큰, 쿠키, 문자열 등의 데이터를 암호화하거나 SHA256, MD5 같은 해시를 생성할 때 사용한다.
 - 민감한 보안 기능은 가능하면 브라우저의 Web Crypto API나 서버 측 암호화를 사용하는 것이 권장된다.


## 설치
 - npm i crypto-js
 - pnpm add crypto-js
 - (typescript 환경에서) npm i @types/crypto-js -D
 - (typescript 환경에서) pnpm add @types/crypto-js -D


## 주요 기능
 - AES 대칭키 암호화
 - DES 암호화
 - TripleDES 암호화
 - Rabbit 암호화
 - RC4 암호화
 - SHA-1
 - SHA-256
 - SHA-512
 - MD5
 - HMAC
 - Base64 Encoding