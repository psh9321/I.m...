# ky 
 - Ky는 브라우저의 Fetch API를 기반으로 만든 HTTP 클라이언트 라이브러리이다.
 - fetch()보다 간결한 문법과 다양한 편의 기능을 제공한다.
 - Axios처럼 사용할 수 있지만 내부적으로는 Fetch API를 사용한다.
 - 브라우저 환경을 우선 지원하며 ESM 기반으로 동작한다.
 - 번들 크기가 작다.


## 설치 
 - npm i ky
 - pnpm add ky


## create, extend
 - create() : 새로운 인스턴스를 생성한다.
 - extend() : 기존 인스턴스를 기반으로 옵션을 추가하거나 변경한다.


## 사용한 방법
```ts
    import ky from "ky"

    export const API_INSTANCE = ky.create({
        prefix : "https://backend.domain/api",
        credentials : "include",
        timeout : 10000,
        hooks : {
            beforeRequest : [
                async ({ request }) => {
                    return request
                }
            ],
            beforeError : [
                async ({ error }) => {
                    return error
                }
            ],

            afterResponse : [
                async ({ response }) => {
                    return response
                }
            ]
        }
    })

    async function API_POST_CALLBACK() {
        /** https://backend.domain/api/add */
        const api = await API_INSTANCE("add", {
            method : "post",
            json : {
                title : "test",
                contents : "contents"
            }
        });

        if(!api.ok) return null;

        const result = api.json() as { success : boolean, msg : string }
    }

    async function API_GET_CALLBACK() {
        /** https://backend.domain/api/list?offset=0&limit=20 */
        const api = await  API_INSTANCE("list", {
            method : "get",
            searchParams : {
                offset : 0,
                limit : 20,
            }
        })

        if(!api.ok) return null;

        const result = api.json() as { title : string, contents : string }[]
    }
```