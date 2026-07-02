# axios
 - Axios는 브라우저와 Node.js에서 HTTP 요청을 쉽게 보낼 수 있도록 만든 Promise 기반 HTTP 클라이언트 라이브러리이다.
 - REST API와 통신할 때 가장 많이 사용되는 라이브러리 중 하나이다.
 - 요청 및 응답을 가로채는 Interceptor, 자동 JSON 변환, Timeout, 요청 취소 등 다양한 기능을 제공한다


## 설치 
 - npm i axios
 - pnpm add axios


## 사용한 방법
```js

    const Config = {
        API_URL : "https://backend.domain/api"    
    }

    

    const Axios = {

        AXIOS_TIME_LIMIT : 15000,

        /**
         * axios 헤더를 리턴
         * @param {string} method get, post
         * @param {string} url api url
         * @param {string} token accessToken, refreshToken
         * @param {object} data post 일시 body
         * @returns 
         */
        getHeader(method, url, token, data){
            let head = {
                method:method,
                timeout:this.AXIOS_TIME_LIMIT,
                url : url,
                headers:{
                    "Content-Type": "application/json",    
                }
            }

            if(token) head["headers"]["Authorization"] = `Bearer ${token}`

            if(data) head["data"] = data

            return head
        }
    }

    const Example = {
        baseUrl : `${Config.API_URL}/example`
        Get(token) {
            /** GET https://backend.domain/api/example */
            const config = Axios.getHeader("get", this.baseUrl, token);
            const response = await axios(config)

            const result = response.data;

            if (result.resultCode !== 200) throw result;

            return result
        }

        Post(token, param) {
            /** POST https://backend.domain/api/example */
            const config = Axios.getHeader("post", this.baseUrl, token, param);

            const response = await axios(config)

            const result = response.data;

            if (result.resultCode !== 200) throw result;

            return result
        }
    }

    axios.interceptors.request.use(req => {
        console.log(req,"axios.interceptors requst")

        return req
    })

    axios.interceptors.response.use(res => {
        console.log(res,"axios.interceptors response")

        return res
    })


```