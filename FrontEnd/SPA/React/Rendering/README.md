# 렌더링 (Rendering)

1. 초기 랜더링
 - 앱이 시작되면 ReactDOM이 컴포넌트 를 렌더링 하도록 요청 
 - ReactDOM이 App 컴포넌트의 렌더링을 시작한다.
```javascript
    ReactDOM.createRoot(root).render(<App />);
```


2. 컴포넌트 렌더 단계 (Render Phase)
 - 컴포넌트 함수가 실행되어 JSX를 반환하고 React Element(Virtual DOM 표현)가 생성된다.
    
## 이 단계에서 실행되는 것들
 - 컴포넌트 함수 실행
 - props/state 읽기
 - return JSX 실행 ⇒ React Element 생성(Virtual DOM 표현)
 - 훅(useState, useMemo 등) 초기 값 준비
        
## 특징 
 - 순수 함수 처럼 동작 해야함
 - DOM 조작 X
 - 브라우저에 영향 X
 - 여러 번 호출될 수 있음 (StrictMode)


3. 재조정 (Reconciliation)
 - 새로운 Virtual DOM 과 기존 Virtual DOM 을 비교 하는 과정  

## React 가 비교 하여 체크 
 - 어떤 컴포넌트가 변경됐는지
 - 어떤 DOM 을 업데이트 할지
 - 어떤 부분을 재사용할지
    
## key 의 역할이 중요 
 - 리스트 렌더링 시 어떤 요소가 변경/삭제/이동했는지 식별하는 데 사용됨

4. 커밋 단계 (Commit Phase)
 - 실제 DOM 변경은 Commit Phase에서 동기적으로 수행된다.
 - Render Phase는 여러 번 수행될 수 있지만, 실제 DOM은 Commit 시점에 반영된다.

 ## 이 단계에서 실행 되는 것들
 - DOM 업데이트 (추가/삭제/변경)
 - layout 계산 발생 가능
 - 화면(브라우저 페인팅) 반영



5. Effect 실행 단계
 - 커밋 이후에 실행됨 
    
## 실행 순서
 초기 렌더링
 ▼
 ReactDOM.render()
 ▼
 Render Phase
 ▼
 Virtual DOM 생성
 ▼
 Reconciliation
 ▼
 Commit Phase
 (DOM 업데이트)
 ▼
 useLayoutEffect
 ▼
 Browser Paint
 ▼
 useEffect