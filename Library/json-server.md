# json-server 
 - JSON 파일을 데이터베이스처럼 사용하는 Mock API 서버이다.
 - 별도의 백엔드 개발 없이 REST API를 빠르게 구축할 수 있다.
 - CRUD(Create, Read, Update, Delete) API를 기본 제공한다.
 - 실제 서비스보다는 프론트엔드 개발 및 테스트 용도로 주로 사용된다.


## 설치
 - npm i json-server
 - pnpm add json-server


## 실행 방법 
 - npx json-server --watch {DB 역할 JSON파일} --port {PORT 번호} 로 실행한다. (port 번호를 설정하지않을시 3000 으로 실행)
 - JSON 파일내 프로퍼티 값이 endpoint 가 된다.
 ```json

    {
        /** http://localhost:3000/posts */
        "posts" : [
            {
                "id" : "1"
                "title" : "게시물 1",
                "contents : "게시물 1 이다."
            }
        ],

        /** http://localhost:3000/users */
        "users" : [
            {
                "name" : "su hyun",
                "job" : "developer",
                "gender" : "male"
            }
        ]
    }
 ```

## 주요 기능 
 - GET(조회), POST(등록), DELETE(삭제), PATCH(전체 수정), PUT(부분 수정) 등의 메서드 및 기능을 제공한다.
 - 각 게시물 마다 고유 아이디를 자동으로 생성한다.


1. GET : 게시물 조회
  - 페이지네이션 형태로 조회 : _page, _per_page
  - _page : 페이지 번호 (1부터 시작)
  - _per_page : 페이지 당 게시물 수
  ```ts
  const api = await fetch(`http://localhost:9999/posts?_page=0&_per_page=20`);

  const result : {
    first: number; /** 첫 번째 페이지 번호 (항상 1) */
    last: number; /** 마지막 페이지 번호 */
    next: number | null; /** 다음 페이지 번호 (마지막 페이지인 경우 null) */
    prev: number | null; /** 이전 페이지 번호 (첫 페이지인 경우 null) */
    pages: number; /** 전체 페이지 수 */
    items: number; /** 전체 데이터 개수 */
    data: []; /** 현재 페이지의 데이터 목록 */
  } = await api.json();
    
  ```

  - 게시물 상세 조회 
  ```ts
    const api = await fetch(`http://localhost:9999/posts/{게시물 고유 아이디}`);

    const result = await api.json();
  ```


2. POST : 게시물 등록 
```ts
    const api = await fetch(`http://localhost:9999/posts`, {
        method : "post",
        body : JSON.stringify({title : "게시물 2", contents : "게시물 2"})
    });

    const result = await api.json();

    // "posts" : [
    //     {
    //         "id" : "1"
    //         "title" : "게시물 1",
    //         "contents : "게시물 1 이다."
    //     }, 
    //     {
    //         "id" : "2"
    //         "title" : "게시물 2",
    //         "contents : "게시물 2 이다."
    //     }
    // ],
```


3. PATCH : 게시물 수정 
```ts
    const api = await fetch(`http://localhost:9999/posts/2`, {
        method : "patch",
        body : JSON.stringify({title : "게시물 222", contents : "게시물 222"})
    });

    const result = await api.json();

    // "posts" : [
    //     {
    //         "id" : "1"
    //         "title" : "게시물 1",
    //         "contents : "게시물 1 이다."
    //     }, 
    //     {
    //         "id" : "2"
    //         "title" : "게시물 222",
    //         "contents : "게시물 222."
    //     }
    // ],
```

4. DELETE : 게시물 삭제
```ts
    const api = await fetch(`http://localhost:9999/posts/2`, {
        method : "delete",
    });

    const result = await api.json();

    // "posts" : [
    //     {
    //         "id" : "1"
    //         "title" : "게시물 1",
    //         "contents : "게시물 1 이다."
    //     }, 
    // ],
```