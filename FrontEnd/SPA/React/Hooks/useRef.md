# useRef
 - 컴포넌트가 다시 렌더링되어도 동일한 객체를 유지하는 Hook이다.
 - 값을 변경해도 컴포넌트는 다시 렌더링되지 않는다.
 - DOM 요소에 직접 접근하거나 렌더링과 무관한 값을 저장할 때 사용한다.

## 기본 문법

```tsx
    const ref = useRef(initialValue);
```

- `ref.current` : 현재 저장된 값
- `initialValue` : 초기 값

## 동작 방식

1. 컴포넌트가 처음 렌더링될 때 Ref 객체를 생성한다.
2. 이후 렌더링에서는 동일한 Ref 객체를 재사용한다.
3. `ref.current`를 변경해도 렌더링은 발생하지 않는다.

## DOM 접근

```javascript
const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
    inputRef.current?.focus();
};

return (
    <>
        <input ref={inputRef} />
        <button onClick={focusInput}>포커스</button>
    </>
);
```

## 값 저장

렌더링과 관계없는 값을 저장할 수 있다.

```tsx
const renderCount = useRef(0);

renderCount.current++;
```

## 사용해야 하는 경우

- DOM 요소 접근
- input focus
- scroll 위치 저장
- 이전 값 저장
- timer ID 저장
- 외부 라이브러리 인스턴스 저장

## 사용하지 않아야 하는 경우

화면에 표시되는 값은 state를 사용해야 한다.

❌

```tsx
const countRef = useRef(0);

countRef.current++;
```

```tsx
<p>{countRef.current}</p>
```

→ 값은 변경되지만 화면은 다시 렌더링되지 않는다.

✅

```tsx
const [count, setCount] = useState(0);
```

## useRef와 useState 차이

| useRef | useState |
|---------|----------|
| 값 변경 시 렌더링되지 않음 | 값 변경 시 다시 렌더링 |
| DOM 접근 가능 | DOM 접근 불가 |
| 렌더링과 무관한 값 저장 | UI 상태 저장 |

## 특징

- 동일한 Ref 객체를 유지한다.
- `current` 값은 자유롭게 변경할 수 있다.
- 값이 변경되어도 렌더링되지 않는다.
- DOM 요소에 접근할 수 있다.