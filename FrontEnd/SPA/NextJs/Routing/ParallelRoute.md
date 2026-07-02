# Parallel Route
 - Next.js App Router에서 하나의 페이지 안에 여러 Route를 독립적으로 렌더링할 수 있도록 지원하는 기능이다.
 - `@폴더명`(Named Slot)을 사용하여 각 영역을 별도의 Route로 관리할 수 있다.
 - 각 Slot은 독립적으로 렌더링되며, 서로 다른 페이지나 컴포넌트를 동시에 표시할 수 있다.


## 장점
 - 여러 화면을 동시에 독립적으로 렌더링할 수 있다.
 - 특정 영역만 변경하고 나머지 화면은 유지할 수 있다.
 - 레이아웃을 재사용하면서 복잡한 UI를 구성하기 쉽다.
 - Intercepting Route와 함께 사용하면 모달 UI를 자연스럽게 구현할 수 있다.


## 동작 과정
 1. Layout에서 여러 Slot을 정의한다.
 2. 각 Slot은 독립적인 Route를 가진다.
 3. Next.js가 각 Slot을 병렬(Parallel)로 렌더링한다.
 4. 필요한 Slot만 변경되고 나머지 화면은 유지된다.

```tsx
    export default function Layout({ main, chat, sidebar }: {
        main: React.ReactNode;
        chat: React.ReactNode;
        sidebar: React.ReactNode;
    }) {
        return (
            <>
                {sidebar}
                {main}
                {chat}
            </>
        );
    }
```