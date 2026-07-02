# uuid (Universally Unique Identifier)
 - UUID는 전 세계적으로 중복될 가능성이 매우 낮은 고유 식별자(Unique ID) 를 생성하기 위한 표준이다.
 - 데이터베이스의 기본 키(ID), 파일명, 토큰, 세션 ID 등에 많이 사용된다.
 - 일반적으로 128비트(16바이트) 크기를 가지며, 사람이 보기 쉽도록 36자리 문자열 형태로 표현된다.


## 설치
 - npm i uuid
 - pnpm add uuid

## 사용예시
```ts
    import { v4 } from "uuid"

    /** string */
    console.log(v4())
```