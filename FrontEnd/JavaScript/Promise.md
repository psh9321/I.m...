# Promise
 - Promise는 JavaScript에서 비동기 작업(Asynchronous Operation)의 결과를 나타내는 객체이다.
 - 시간이 걸리는 작업(HTTP 요청, 파일 읽기, 타이머 등)의 성공 또는 실패 결과를 미래에 전달하기 위해 사용된다.
 - 콜백 지옥(Callback Hell)을 줄이고 비동기 코드를 읽기 쉽게 작성할 수 있다.
 - async/await도 내부적으로 Promise를 기반으로 동작한다.


## Promise의 상태(state)
| 상태        | 설명                 |
| --------- | ------------------ |
| Pending   | 대기 상태 (아직 완료되지 않음) |
| Fulfilled | 작업 성공              |
| Rejected  | 작업 실패              |

Pending
   │
   ├── resolve()
   │
   ▼
Fulfilled

또는

Pending
   │
   ├── reject()
   │
   ▼
Rejected


## Promise 생성 

### resolve()
 - Promise를 성공(Fulfilled) 상태로 변경한다.
 - 전달한 값은 이후 then()에서 받을 수 있다.


### reject()
 - Promise를 실패(Rejected) 상태로 변경한다.
 - 전달한 값은 catch()에서 받을 수 있다.

```js
    const promise = new Promise((resolve, reject) => {
        const success = true;

        if (success) {
            resolve("성공");
        } else {
            reject("실패");
        }
    });
```

## Promise 의 결과처리
 - Promise의 실행 결과(성공 또는 실패)를 처리하기 위한 메서드이다.
 - `then()`, `catch()`, `finally()`에 등록한 콜백은 Promise가 완료된 후 비동기(Microtask Queue)로 실행된다.

### then()
 - Promise가 성공했을 때 실행된다.
 ```js
    Promise.resolve("Hello")
    .then(result => {
        console.log(result); /** Hello 출력 */
    });
 ```


### catch() 
 - Promise가 실패했을 때 실행된다.
 ```js
    Promise.reject("에러")
    .catch(error => {
        console.log(error); /** 에러 출력 */
    });
 ```


### finally
 - 성공 여부와 관계없이 마지막에 항상 실행된다.
 ```js
    fetch("/api")
    .then(() => {
        console.log("성공 시");
    })
    .catch(() => {
        console.log("실패 시");
    })
    .finally(() => {
        console.log("항상 실행");
    });
 ```


### Promise Chaining
 - then()은 Promise를 반환하므로 계속 연결할 수 있다.
 ```js
    Promise.resolve(1)
    .then(num => num + 1)
    .then(num => num + 1)
    .then(num => {
        console.log(num);
    });
 ```

## Promise 의 순차적 실행 
 - async/await 을 사용해 Promise 를 순차적으로 실행한다.
 ```js
    async function GetData() {
        const res = await fetch("/api");
        const data = await res.json();

        console.log(1)
    }

    async function GetData2() {
        const res = await fetch("/api");
        const data = await res.json();

        console.log(2)
    }

    await GetData();
    await GetData2();

    /**
     * 출력 순서
     * 1
     * 2
    */
 ```

### 동작 순서
 1. GetData() 호출
 2. fetch()가 Promise를 반환
 3. await를 만나면 현재 async 함수의 실행이 일시 중단된다.
 4. fetch()가 완료되면 Promise가 Fulfilled 된다.
 5. 이후의 코드(console.log(1))는 Microtask Queue에 등록되어 실행된다.
 6. GetData()가 끝난 후 GetData2()가 호출된다.
 7. 동일한 과정을 반복한다.


## Promise 기능 
| 메서드                    | 설명                   |
| ---------------------- | -------------------- |
| `then()`               | 성공 시 실행              |
| `catch()`              | 실패 시 실행              |
| `finally()`            | 성공/실패와 관계없이 마지막에 실행  |
| `Promise.resolve()`    | 즉시 성공하는 Promise 생성   |
| `Promise.reject()`     | 즉시 실패하는 Promise 생성   |
| `Promise.all()`        | 모든 Promise가 성공해야 성공  |
| `Promise.allSettled()` | 모든 Promise의 결과를 반환   |
| `Promise.race()`       | 가장 먼저 완료된 Promise 반환 |
| `Promise.any()`        | 가장 먼저 성공한 Promise 반환 |


### Promise.all()
 - 여러 Promise를 동시에 실행한다.
 - 모든 Promise가 성공해야 성공한다.
 - 하나라도 실패하면 즉시 실패한다.
 
 ```js 성공예시 
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    Promise.all([p1, p2, p3])
    .then(result => {
        console.log(result); /** [1, 2, 3] 출력 */
    });
 ```

 ```js 실패예시
    Promise.all([
        Promise.resolve(1),
        Promise.reject("error"),
        Promise.resolve(3)
    ])
    .catch(console.error);
 ```


### Promise.allSettled()
 - 모든 Promise가 끝날 때까지 기다린다.
 - 성공 여부와 상관없이 결과를 반환한다.
 ```js
    Promise.allSettled([
        Promise.resolve(1),
        Promise.reject("error")
    ]).then(console.log);

    /**
     * [
     *   { status: "fulfilled", value: 1 },
     *   { status: "rejected", reason: "error" }
     * ] 출력
     * */
 ```


### Promise.race()
 - 가장 먼저 완료된 Promise의 결과를 반환한다.
 ```js
    Promise.race([
        new Promise(resolve => setTimeout(() => resolve("A"), 3000)),
        new Promise(resolve => setTimeout(() => resolve("B"), 1000))
    ])
    .then(rs => {
        console.log(rs) /** B 출력 */
    });
 ```


### Promise.any()
 - 가장 먼저 성공한 Promise를 반환한다.
 - 실패한 Promise는 무시한다.
 ```js
    Promise.any([
        Promise.reject(),
        Promise.resolve("Success"),
        Promise.resolve("Hello")
    ]).then(rs => {
        console.log(rs) /** Success 출력 */
    });
 ```


## Promise와 이벤트 루프 
```js
    console.log(1);

    Promise.resolve().then(() => {
        console.log(2);
    });

    console.log(3);

    /** 출력결과
     * 1
     * 3
     * 2
    */
```

1. 동기 코드 실행
2. Promise의 then()은 Microtask Queue에 등록된다.
3. 현재 실행 중인 Call Stack이 비워지면 Microtask Queue를 먼저 처리한다.
