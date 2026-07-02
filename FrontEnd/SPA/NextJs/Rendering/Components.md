# Client Component
 - Client Component는 브라우저(Client)에서 렌더링되는 React 컴포넌트이다.
 - 파일 최상단에 `"use client"`를 선언하여 Client Component로 사용할 수 있다.
 - 사용자 이벤트 처리, React Hook, 브라우저 API 등 클라이언트에서만 가능한 기능을 사용할 수 있다.


## 언제 사용하는가?
 - useState, useEffect 등 React Hook을 사용하는 경우
 - onClick, onChange 등 이벤트 처리가 필요한 경우
 - window, document, localStorage 등 브라우저 API를 사용하는 경우
 - Zustand, React Query 등 클라이언트 상태 관리 라이브러리를 사용하는 경우


```
    "use client";

    import { useState } from "react";

    const IndexPageView = () => {
        const [count, setCount] = useState(0);

        return (
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
        );
    }
    
    export default IndexPageView
```



# Server Component
 - Server Component는 서버에서 렌더링되는 React 컴포넌트이다.
 - App Router에서는 별도의 설정 없이 기본적으로 Server Component로 동작한다.
 - 서버에서 실행되므로 데이터베이스 조회, 외부 API 호출 등 서버 로직을 직접 수행할 수 있다.
 - 브라우저로 JavaScript를 전송하지 않아 초기 번들 크기를 줄일 수 있다.


## 언제 사용하는가?
 - 데이터베이스 조회
 - 외부 API 호출
 - SEO가 중요한 페이지
 - 초기 데이터를 조회하는 페이지
 - 브라우저 API나 사용자 이벤트가 필요하지 않은 경우


```
    const IndexPageServer = async () => {
        const users = await fetch("https://api.example.com/users").then(res => res.json());

        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );

    }

export default IndexPageServer
```