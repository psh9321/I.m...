# Error
 - Error는 JavaScript에서 실행 중 발생하는 오류를 표현하는 객체이다.
 - throw new Error()를 사용하면 예외를 발생시킬 수 있다.
 - try...catch에서 Error를 받아 처리할 수 있다.
 - message, name, stack은 가장 많이 사용하는 속성이다.
 - 문자열보다 Error 객체를 사용하는 것이 디버깅과 유지보수 측면에서 권장된다.


## Error 객체생성
```js
    const error = new Error("로그인 실패");

    console.log(error)
    /**
     * { name: "Error", message: "로그인 실패", stack: "..." } 출력
    */
```


## Error 객체 프로퍼티
 - name : 오류의 종류를 나타낸다.
 - message : 오류 메세지를 나타낸다.
 - stack : 오류가 발생한 호출 경로(Call Stack)를 나타낸다.

 
| Error 객체      | 설명
| -------------- | ------------------------------------
| Error	         | 일반적인 오류
| TypeError	     | 잘못된 타입 사용
| ReferenceError | 존재하지 않는 변수 참조
| SyntaxError	 | 문법 오류
| RangeError	 | 허용 범위를 벗어난 값
| URIError	     | URI 인코딩/디코딩 오류
| EvalError	     | eval() 관련 오류(현재는 거의 사용되지 않음)
| AggregateError | 여러 개의 Error를 하나로 묶은 오류