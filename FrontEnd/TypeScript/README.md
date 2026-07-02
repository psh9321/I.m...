# 타입스크립트 (TypeScript)
 - JavaScript에 정적 타입 시스템을 추가한 상위(Superset) 언어이다. 
 - 작성한 코드는 컴파일 과정을 거쳐 일반 JavaScript로 변환되어 브라우저나 Node.js에서 실행된다.

## 타입스크립트 사용 이유 
 - 자바스크립트 는 동적 타입 언어이기 때문에 실행 중에 타입 오류가 발생할 수 있다.
 ```
    function add(a, b) {
        return a + b;
    }

    add(10, "20"); /** "1020" */
 ```
 - 타입을 명시해 이러한 실수를 컴파일 단계에서 미리 발견할 수 있다. 
 ```
    function add(a: number, b: number): number {
        return a + b;
    }

    add(10, "20"); /** ❌ 컴파일 에러 */
 ```


## 주요 특징 

1. 정적 타입 검사 
 - 변수, 함수, 객체 등의 타입을 컴파일 시점에 검사한다.
 ```
    let name: string = "박수현";
    let annual: number = 4;
    let isDeveloper: boolean = true;
 ```


2. 타입 추론(Type Inference)
 - 항상 타입을 직접 작성할 필요는 없다.
 ```
    /** string 으로 자동 추론 */
    let name = "박수현";

    /** number 로 자동 추론 */
    let annual = 4;
 ```


3. Interface 
 - 객체, 함수, 클래스 등의 구조를 정의할 때 사용하며, 프론트엔드에서는 주로 객체 타입 정의에 사용한다.
```
    interface USER {
        /** 연차 수 */
        annual : number; 

        /** 이름 */
        name : string;

        /** 개발자 여부 */
        isDeveloper? : boolean;
    }

    const user: USER = {
        annual : 1,
        name: "박수현",
        isDeveloper: true, /** 없어도 됨 */
    };
```


4. Type Alias 
 - 타입에 이름을 붙인다.
```
    /** 연차 수 */
    type ANNUAL = number;

    /** 이름 */
    type NAME = string;

    interface User {
        annual: ANNUAL;
        name: NAME;
    };
```


5. Union Type
 - 여러 타입 중 하나를 허용한다.
 ```
    /** 문자도 되고 숫자도 가능 */
    let value: string | number;

    value = "hello";
    value = 100;
 ```


6. Literal Type 
 - 허용 가능한 값을 제한 한다.
 ```
    type THEME = "light" | "dark";

    const theme: THEME = "light";
 ```


7. Any
 - 모든 타입을 허용한다.
 - 가능하면 사용을 지양하는것이 좋은 타입
 ```
    let value: any = 10;

    value = "hello";
    value = true;
 ```


8. Void 
 - 반환값이 없는 함수
 ```
    function print(): void {
        console.log("hello");
    }
 ```


9. Generic Interface
 - 타입을 파라미터로 입력할 수 있다.
 ```
    interface API_RESPONSE<T> {
        resultCode : number
        data : T;
        errMsg : string;
    }

    interface USER {
        /** 연차 수 */
        annual : number; 

        /** 이름 */
        name : string;
    }

    const response : API_RESPONSE<USER> = {
        resultCode : 200,
        data : {
            annual : 4,
            name : "박수현"
        },
        errMsg : ""
    }
 ```


10. keyof 
 - 객체의 키를 타입으로 가져온다.
 ```
    interface USER {
        /** 연차 수 */
        annual : number; 

        /** 이름 */
        name : string;
    }

    /** annual | name */
    type USER_KEY = keyof USER; 
 ```


11. Record
 - 특정 키와 값 타입을 갖는 객체를 정의한다.
 ```
    type USER = Record<"name" | "firstName", string>

    const user : USER = {
        name : "수현",
        firstName : "박"
    }
 ```


## 타입 선언 방법 
 - 변수나 함수의 타입을 선언
```
    function sum(a: number, b: number): number {
        return a + b;
    };

    const sumArrowFunction = (a: number, b: number): number => {
        return a + b;
    };

    interface USER {
        /** 연차 수 */
        annual : number; 

        /** 이름 */
        name : string;
    }

    const obj : USER = {
        name : "박수현",
        annual : 4,
    };

    const arrUser : USER[] = [{name : "박수현", annual : 4}, {name : "박수현2", annual : 5}];
    const arrNumber : number[] = [1,2,3];
    const arrString : string[] = ["a","b","c"];
```


## 타입 단언 방법 
 - 특정 변수나 값을 원하는 타입으로 간주한다.
 - 컴파일러에게 "이 값은 이 타입이다."라고 알려준다.
 - 특히 querySelector()의 반환 타입은 Element | null 이므로 HTMLInputElement 전용 속성(value 등)을 바로 사용할 수 없다.
 - TypeScript가 반환 타입을 정확히 알 수 없는 값(unknown, any 등)을 원하는 타입으로 사용할 때 주로 as 를 사용해 단언 한다.
 ```
    interface USER {
        /** 연차 수 */
        annual : number; 

        /** 이름 */
        name : string;
    }

    const userInfo = API_USER_DATA() as USER;
     
 ```
 ```
 as-is
    const input = document.querySelector("#name");

    input.value; // ❌ Property 'value' does not exist

 to-be 
    const input = document.querySelector("#name") as HTMLInputElement | null;

    console.log(input?.value)
 ```
 

## 명령어
| 명령어                         | 설명                            |
| --------------------------- | ----------------------------- |
| `tsc`                       | TypeScript 컴파일러 실행            |
| `tsc --init`                | `tsconfig.json` 생성            |
| `tsc index.ts`              | 특정 파일 컴파일                     |
| `tsc --watch` 또는 `tsc -w`   | 파일 변경 시 자동 컴파일                |
| `tsc --noEmit`              | 컴파일 결과를 생성하지 않고 타입 검사만 수행     |
| `tsc --build` 또는 `tsc -b`   | Project References 기반 프로젝트 빌드 |
| `tsc --build --clean`       | 빌드 결과(.tsbuildinfo 등) 정리      |
| `tsc --version` 또는 `tsc -v` | TypeScript 버전 확인              |
| `tsc --help`                | 사용 가능한 옵션 확인                  |
| `tsc --showConfig`          | 최종 적용된 `tsconfig.json` 출력     |
| `tsc --listFiles`           | 컴파일 대상 파일 목록 출력               |
| `tsc --listEmittedFiles`    | 생성된 파일 목록 출력                  |
| `tsc --traceResolution`     | 모듈 해석 과정 출력(디버깅)              |
| `tsc --diagnostics`         | 컴파일 시간 및 통계 출력                |
| `tsc --extendedDiagnostics` | 상세 성능 통계 출력                   |
| `tsc --generateTrace trace` | 컴파일 트레이스 생성(성능 분석)            |
