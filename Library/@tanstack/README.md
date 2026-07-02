# @tanstack/react-query 
 - 서버 상태(Server State)를 관리하기 위한 라이브러리
 

## 설치 
 - npm i @tansatack/react-query
 - pnpm add @tansatack/react-query

## 주요 기능

1. 캐싱 
 - 한 번 받아온 데이터를 메모리에 저장한다.
 - 저장된 데이터는 여러 페이지, 컴포넌트에서 사용 할 수 있다.
 - 불필요한 API 요청을 줄여 성능을 향상시킨다.


2. 중복 요청 방지 
 - 동시에 여러 컴포넌트가 같은 데이터를 요청해도 한번만 요청됨.
    

3. Background Refetch
 - 이벤트 루프의 백그라운드를 의미하는 것이 아니라, 기존 데이터를 먼저 보여주면서 뒤에서 최신 데이터를 다시 요청하는 동작 전략(UX 관점)을 의미한다.
 - 캐시된 데이터를 먼저 보여주고 백그라운드에서 최신 데이터를 가져온다.


4. Loading / Error 관리
 - 별도의 state 를 만들필요없고 react-query 에서 로딩, 에러 상태를 제공한다.
 ```tsx
    const { data, isLoading, isError } = useQuery(...);
 ```


5. Mutation 
 - POST, PUT, PATCH, DELETE 를 위한 기능
 ```
    const mutation = useMutation({
        mutationFn: createUser,
    });

    mutation.mutate({
        name: "Tom",
    });
 ```


6. Query Invalidation 
 - 저장된 cache 를 무효화 해 다시 API 를 호출하게 만든다.


## defaultOptions

### querys
| 옵션                            | 타입                                       | 기본값        | 설명                           |
| ----------------------------- | ---------------------------------------- | ---------- | ---------------------------- |
| `queryFn`                     | `() => Promise<T>`                       | -          | 데이터를 조회하는 함수                 |
| `queryKey`                    | `QueryKey`                               | -          | 캐시를 식별하는 고유 키                |
| `enabled`                     | `boolean`                                | `true`     | `false`이면 자동 요청하지 않음         |
| `staleTime`                   | `number`                                 | `0`        | 데이터를 Fresh 상태로 유지하는 시간       |
| `gcTime`                      | `number`                                 | `5분`       | 사용하지 않는 캐시를 메모리에서 제거하기까지의 시간 |
| `retry`                       | `boolean \| number \| (fn)`              | `3`        | 실패 시 재시도 여부 및 횟수             |
| `retryDelay`                  | `number \| (fn)`                         | 지수 백오프     | 재시도 간격                       |
| `refetchOnMount`              | `boolean \| "always"`                    | `true`     | 컴포넌트 마운트 시 재조회 여부            |
| `refetchOnWindowFocus`        | `boolean \| "always"`                    | `true`     | 브라우저 탭 포커스 시 재조회 여부          |
| `refetchOnReconnect`          | `boolean \| "always"`                    | `true`     | 네트워크 재연결 시 재조회 여부            |
| `refetchInterval`             | `number \| false`                        | `false`    | 일정 주기로 자동 조회(Polling)        |
| `refetchIntervalInBackground` | `boolean`                                | `false`    | 백그라운드에서도 Polling 수행          |
| `networkMode`                 | `"online" \| "always" \| "offlineFirst"` | `"online"` | 네트워크 동작 방식                   |
| `select`                      | `(data) => result`                       | -          | 조회 데이터를 원하는 형태로 변환           |
| `placeholderData`             | `T` | `(prev)=>T`                        | -          | 조회 중 임시 데이터 표시               |
| `initialData`                 | `T` | `()=>T`                            | -          | 최초 캐시 데이터 지정                 |
| `initialDataUpdatedAt`        | `number`                                 | -          | initialData의 생성 시간           |
| `throwOnError`                | `boolean`                                | `false`    | 에러를 Error Boundary로 전달       |
| `meta`                        | `Record<string, unknown>`                | -          | Query에 사용자 정의 메타데이터 저장       |


### mutations (요청 마다 동작이 다르기 때문에 대부분의 프로젝트에서는 mutation 옵션을 비워둔다고 한다.)
| 옵션            | 타입                                       | 기본값        | 설명                                    |
| ------------- | ---------------------------------------- | ---------- | ------------------------------------- |
| `mutationFn`  | `(variables)=>Promise<T>`                | -          | 서버 데이터를 변경하는 함수                       |
| `retry`       | `boolean \| number`                      | `0`        | 실패 시 재시도 여부 및 횟수                      |
| `retryDelay`  | `number \| (fn)`                         | 지수 백오프     | 재시도 간격                                |
| `networkMode` | `"online" \| "always" \| "offlineFirst"` | `"online"` | 네트워크 동작 방식                            |
| `gcTime`      | `number`                                 | `5분`       | Mutation 캐시 유지 시간                     |
| `meta`        | `Record<string, unknown>`                | -          | Mutation 메타데이터                        |
| `onMutate`    | `(variables)=>context`                   | -          | Mutation 실행 직전 호출 (Optimistic Update) |
| `onSuccess`   | `(data)=>void`                           | -          | 성공 시 호출                               |
| `onError`     | `(error)=>void`                          | -          | 실패 시 호출                               |
| `onSettled`   | `()=>void`                               | -          | 성공/실패와 관계없이 마지막에 호출                   |



## useQueryClient
 - 캐시 저장소에 접근하는 훅 
 - 이미 저장된 query 캐시를 직접조회, 수정, 무효화, 재요청 할 때 사용한다. 

### 대표 기능 
 - getQueryData(): 캐시 데이터 조회
 - setQueryData(): 캐시 데이터 직접 수정
 - invalidateQueries(): 캐시를 stale 상태로 만들고 필요 시 재요청
 - refetchQueries(): 조건에 맞는 query를 즉시 재요청
 - removeQueries(): 캐시 제거


## useMutation 
 - 서버 데이터를 변경(Create, Update, Delete)하기 위한 훅


### 주요 반환값 
 - mutate : Mutation을 실행한다.
 - mutateAsync : Promise를 반환하는 Mutation을 실행한다.
 - isPending : 요청 진행 여부
 - isSuccess : 성공 여부
 - isError : 실패 여부
 - error : 발생한 에러 객체
 - data : 성공 시 반환된 데이터
 - reset : Mutation 상태를 초기화한다.


### 주요 옵션 
 - mutationFn :  실행할 Mutation 함수
 - mutationKey :  Mutation을 식별하는 Key
 - onMutate :  Mutation 실행 직전에 호출된다. (낙관적 업데이트)
 - onSuccess :  Mutation 성공 시 호출된다.
 - onError :  Mutation 실패 시 호출된다.
 - onSettled :  성공/실패 여부와 관계없이 마지막에 호출된다.

| `useQuery`           | `useMutation`                                      |
| ----------------     | -------------------------------------------------- |
| 서버 데이터를 조회(Read)  | 서버 데이터를 변경(Create, Update, Delete)                 |
| `GET` 요청            | `POST`, `PUT`, `PATCH`, `DELETE` 요청                |
| 자동 캐싱              | 캐시를 직접 변경하지 않음 (`useQueryClient`와 함께 사용)        |
| 자동 재조회 기능 제공     | 성공 후 `invalidateQueries`, `setQueryData` 등으로 캐시 갱신 |