# React Compiler

- React 코드를 분석하여 자동으로 성능 최적화를 수행하는 컴파일러이다.
- useMemo, useCallback, React.memo와 같은 수동 메모이제이션을 자동으로 적용할 수 있다.
- 개발자가 불필요한 최적화 코드를 작성하는 부담을 줄여준다.

## 기존 방식

성능 최적화를 위해 직접 메모이제이션을 적용해야 했다.

```javascript
const value = useMemo(() => expensiveCalc(data), [data]);

const handleClick = useCallback(() => {
    console.log("Click");
}, []);

export default memo(Component);
```

## React Compiler 적용 후

React Compiler가 안전하다고 판단하면 자동으로 메모이제이션을 수행한다.

```javascript
const value = expensiveCalc(data);

const handleClick = () => {
    console.log("Click");
};

export default Component;
```

별도의 useMemo, useCallback, React.memo를 사용하지 않아도 동일한 최적화를 수행할 수 있다.

## 장점

- 불필요한 useMemo 사용 감소
- 불필요한 useCallback 사용 감소
- React.memo 사용 감소
- 코드가 단순해진다.
- 개발자가 최적화보다 비즈니스 로직에 집중할 수 있다.

## 주의사항

- 모든 프로젝트에서 자동으로 적용되는 것은 아니다.
- React Compiler가 적용된 환경에서만 동작한다.
- 모든 최적화를 대체하는 것은 아니며 일부 상황에서는 직접 메모이제이션이 필요할 수 있다.

## React Compiler 이전과 이후

| 이전 | 이후 |
|------|------|
| useMemo | 대부분 자동 최적화 |
| useCallback | 대부분 자동 최적화 |
| React.memo | 대부분 자동 최적화 |

## 실무

- 최신 React 프로젝트에서는 React Compiler를 사용하는 경우 useMemo, useCallback, React.memo를 과도하게 사용하는 패턴이 줄어들고 있다.
- 다만 React Compiler를 사용하지 않는 프로젝트와 레거시 프로젝트에서는 여전히 수동 메모이제이션이 널리 사용된다.