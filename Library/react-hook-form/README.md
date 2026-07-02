# react-hook-form
 - React에서 폼(Form) 상태와 유효성 검사를 효율적으로 관리하기 위한 라이브러리이다.
 - Uncontrolled Component 기반으로 동작하여 불필요한 리렌더링을 최소화한다.
 - 적은 코드로 입력값 관리, 유효성 검사, 제출 처리 등을 구현할 수 있다.
 - TypeScript와의 호환성이 뛰어나며 대규모 프로젝트에서도 많이 사용된다.


## 설치
 - npm i react-hook-form
 - pnpm add react-hook-form


## 주요기능 

1. 폼 상태 관리
 - 입력값을 React State(useState)로 직접 관리하지 않아도 된다.
 - 모든 입력값을 RHF가 내부적으로 관리한다.


2. 유효성 검사(Validation)
 - HTML Validation과 커스텀 Validation을 쉽게 적용할 수 있다.


3. 에러 관리


4. 제출 처리


5. TypeScript 지원


## 주요 API
| API            | 설명                      |
| -------------- | ----------------------- |
| useForm()      | 폼 생성                    |
| register()     | 입력 요소 등록                |
| handleSubmit() | 제출 및 유효성 검사             |
| watch()        | 특정 값 실시간 조회             |
| setValue()     | 값 변경                    |
| getValues()    | 현재 값 조회                 |
| reset()        | 폼 초기화                   |
| trigger()      | 수동 유효성 검사               |
| clearErrors()  | 에러 제거                   |
| setError()     | 수동 에러 등록                |
| unregister()   | 입력 요소 제거                |
| resetField()   | 특정 필드 초기화               |
| control        | Controller에서 사용하는 객체    |
| formState      | 폼 상태(errors, isDirty 등) |


## formState 주요 속성
| 속성            | 설명                        |
| ------------- | ------------------------- |
| errors        | 유효성 검사 에러                 |
| isDirty       | 하나 이상의 값이 변경되었는지          |
| dirtyFields   | 변경된 필드 목록                 |
| touchedFields | 포커스를 한 번이라도 받은 필드         |
| isValid       | 폼 전체 유효 여부                |
| isSubmitting  | 제출 중 여부                   |
| isSubmitted   | 제출 여부                     |
| submitCount   | 제출 횟수                     |
| isLoading     | async defaultValues 로딩 여부 |



# @hookform/resolvers 
 - React Hook Form과 다양한 유효성 검사 라이브러리(Zod, Yup, Joi 등)를 연결해주는 라이브러리이다.
 - React Hook Form의 resolver 옵션을 통해 외부 Validation 결과를 사용할 수 있다.
 - 직접 register()에 Validation 규칙을 작성하는 대신 스키마(Schema) 기반으로 유효성을 관리할 수 있다.


## 설치
 - npm i @hookform/resolvers
 - pnpm add @hookform/resolvers


## 사용 이유
 - Validation 로직을 컴포넌트 밖에서 관리할 수 있다.
 - 프론트엔드와 백엔드에서 동일한 Validation 규칙을 사용할 수 있다.
 - TypeScript 타입 추론을 활용할 수 있다.
 - 폼이 커져도 Validation 코드를 깔끔하게 유지할 수 있다. 


# Zod
 - TypeScript 중심으로 설계된 스키마(Validation) 라이브러리이다.
 - 데이터의 구조와 타입을 정의하고 검증할 수 있다.
 - 검증 결과를 기반으로 TypeScript 타입을 자동으로 추론할 수 있다.
 - React Hook Form뿐만 아니라 API 요청/응답 검증, 환경 변수 검증 등 다양한 곳에서 사용된다.


## 설치
 - npm i zod
 - pnpm add zod


## 주요 메서드
| 메서드           | 설명           |
| ------------- | ------------ |
| `z.string()`  | 문자열          |
| `z.number()`  | 숫자           |
| `z.boolean()` | boolean      |
| `z.date()`    | Date         |
| `z.array()`   | 배열           |
| `z.object()`  | 객체           |
| `z.enum()`    | Enum         |
| `optional()`  | 선택값          |
| `nullable()`  | null 허용      |
| `default()`   | 기본값          |
| `min()`       | 최소값          |
| `max()`       | 최대값          |
| `regex()`     | 정규식 검사       |
| `email()`     | 이메일 형식 검사    |
| `url()`       | URL 형식 검사    |
| `uuid()`      | UUID 형식 검사   |
| `refine()`    | 사용자 정의 검증    |
| `transform()` | 값 변환         |
| `parse()`     | 검증(실패 시 예외)  |
| `safeParse()` | 검증(결과 객체 반환) |


# React Hook Form + @hookform/resolvers + Zod를 함께 사용하는 이유
 - React Hook Form은 폼 상태 관리와 제출을 담당한다.
 - @hookform/resolvers는 React Hook Form과 Zod를 연결하는 역할을 한다.
 - Zod는 입력 데이터의 구조와 유효성을 검증하고 타입을 자동 추론한다.

세 라이브러리를 함께 사용하면 폼 상태 관리, 유효성 검사, TypeScript 타입 관리를 각각의 역할에 맞게 분리할 수 있어 코드의 가독성과 유지보수성이 크게 향상된다. 실무에서도 이 조합이 가장 널리 사용된다.