# async / await
 - async/await는 비동기(Asynchronous) 코드를 동기(Synchronous) 코드처럼 읽기 쉽게 작성할 수 있도록 제공되는 문법이다.
 - 내부적으로는 Promise를 기반으로 동작하며, Promise의 then(), catch()를 더 직관적으로 사용할 수 있게 해준다.
 - then, catch 등을 사용해 콜백을 등록해 사용할수있다. 등록한 콜백들은 마이크로태스크 큐에서 실행된다


## 특징
 - Promise 기반 문법이다.
 - 비동기 코드를 동기 코드처럼 작성할 수 있다.
 - 코드의 가독성이 높아진다.
 - try...catch를 이용해 예외 처리를 할 수 있다.
 - await는 async 함수 내부에서만 사용할 수 있다.
 - await는 Promise가 완료될 때까지 함수의 실행을 일시적으로 멈춘다.
 - await가 다른 JavaScript 코드의 실행을 막는 것은 아니다. (이벤트 루프는 계속 동작한다.)


## async 
 - async를 함수 앞에 붙이면 해당 함수는 항상 Promise를 반환한다.

```js
    function hello() {
        return "Hello";
    }

    console.log(hello()); /** Hello 출력 */
```

```js
    async function hello() {
        return "Hello";
    }

    console.log(hello()); /** Promise {<fulfilled>: 'Hello'} */
```


## await 
 - await는 Promise가 처리될 때까지 기다렸다가 결과값을 반환한다.
 ```js
    const getUser = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Park");
            }, 1000);
        });
    };

    async function main() {
        const user = await getUser();

        console.log(user); /** Park */
    }

    main();
 ```

### 동작순서
1. getUser()가 Promise를 반환한다.
2. await가 Promise가 완료될 때까지 기다린다.
3. Promise 가 resolve되면 결과값을 반환한다.
4. 이후 코드가 실행된다.