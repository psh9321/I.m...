# try/catch 
 - try...catch는 실행 중(Runtime)에 발생한 예외(Exception)를 처리하는 문법이다. 예외가 발생해도 프로그램이 즉시 종료되지 않고 원하는 방식으로 처리할 수 있다.
 - throw를 사용하면 직접 예외를 발생시킬 수 있다.
 - finally는 성공·실패 여부와 관계없이 항상 실행된다.
 - async/await에서는 await한 Promise가 reject되면 catch에서 처리할 수 있다.
 - await 없이 반환된 Promise의 비동기 에러는 try...catch로 잡을 수 없으며, .catch()를 사용하거나 await해야 한다.


## 기본문법
```js
    try {
        /** 예외가 발생할 수 있는 코드 */
    } catch (error) {
        /** 예외가 발생했을 때 실행 */
    }
```

```js 에러 예시
    try {
        throw "error"
    }
    catch(err) {
        console.log(err) /** error 출력 */
    }
```


## 실행순서
```js
    try {
        console.log(1);
        throw new Error("Error");
        console.log(2);
    } 
    catch (error) {
        console.log(3);
    }

    console.log(4);

    /**
     * 출력
     * 1
     * 3
     * 4
    */
```
 1. try 블록 실행
 2. console.log(1) 출력
 3. throw 발생
 4. try 내부의 나머지 코드는 실행하지 않음
 5. catch 블록으로 이동
 6. console.log(3) 실행
 7. catch 종료 후 아래 코드 계속 실행


## async/await 과 try/catch
 - await에서 Promise가 reject되면 catch로 이동한다.
 ```js
    async function getData() {
        try {
            const res = await fetch("/api");

            if (!res.ok) {
                /** HTTP 오류는 reject되지 않아서 직접 throw */
                throw new Error("요청 실패");
            }

            const data = await res.json();

            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
 ```

### 동작 과정
 1. fetch() 실행
 2. Promise가 resolve → 다음 코드 실행
 3. Promise가 reject → catch 실행
 4. throw를 만나도 catch 실행



| 문법        | 설명                            |
| ---------- | ----------------------------- |
| `try`      | 예외가 발생할 수 있는 코드를 실행           |
| `catch`    | 예외가 발생하면 실행                   |
| `finally`  | 예외 발생 여부와 관계없이 항상 실행          |
| `throw`    | 직접 예외를 발생시킴                   |
| `await`    | Promise가 reject되면 `catch`로 이동 |
| `.catch()` | Promise의 reject를 처리           |
