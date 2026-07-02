# Zustand
 - Zustand는 React에서 전역 상태(Global State)를 관리하기 위한 가볍고 단순한 상태 관리 라이브러리이다.
 - Context API 없이도 전역 상태를 공유할 수 있으며, Boilerplate가 매우 적다.
 - Hook 기반 API를 사용하여 필요한 상태만 구독할 수 있어 불필요한 리렌더링을 줄일 수 있다.
 - Redux와 달리 Provider 설정이 필요하지 않으며, 학습 비용이 낮다.


## 설치
 - npm i zustand
 - pnpm add zustand


## 장점
 - 코드가 매우 간단하다.
 - Provider가 필요 없다.
 - TypeScript 지원이 우수하다.
 - 필요한 상태만 구독하여 성능 최적화가 쉽다.
 - Boilerplate가 적어 개발 속도가 빠르다.
 - React 외부(getState(), subscribe())에서도 사용할 수 있다.


## 생성 예시 
```ts
    import { create } from 'zustand'

    interface ZUSTAND_STORE {
        value : string;
        SetValue : (value : string) => void;
    }

    export const useZustandStore = create<ZUSTAND_STORE>((set) => ({
        value : '',
        SetValue(value) { set({ value }) }
    }))

```


## 사용 예시
```tsx
    import useZustandStore from "useZustandStore"

    export const Component = () => {

        const { value, SetValue } = useZustandStore(state => ({
            value : state.value,
            SetValue : state.SetValue
        }));

        return (
            <>
                <h1>{value}</h1>           
                <button onClick={() => SetValue("new value")}>수정</button>
            </>
        )
    }
```


## useShallow
 - 객체나 배열을 선택할 경우 매번 새로운 객체가 생성되면 리렌더링이 발생할 수 있다. 이를 방지하기 위해 useShallow를 사용할 수 있다.

## useShallow 사용 이유
 - 객체·배열 선택 시 얕은 비교(Shallow Compare)를 수행한다.
 - 선택한 값이 실제로 변경되지 않았다면 리렌더링하지 않는다.
 - 같은 Store의 다른 상태가 변경되어도 선택한 값이 동일하면 리렌더링을 방지할 수 있다.

```tsx
    import { useShallow } from 'zustand/shallow'
    import useZustandStore from "useZustandStore"

    export const Component = () => {

        const { value, SetValue } = useZustandStore(useShallow(state => ({
            value : state.value,
            SetValue : state.SetValue
        })));

        return (
            <>
                <p>{value}</p>           
                <button onClick={() => SetValue("new value")}>수정</button>
            </>
        )
    }

    export const Component2 = () => {

        const { value } = useZustandStore(state => state.value);

        return (
            <>
                <p>{value}</p>           
            </>
        )
    }
```