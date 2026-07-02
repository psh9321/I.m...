# useState
 - 함수형 컴포넌트에서 상태(State)를 관리하기 위한 Hook이다.
 - 상태가 변경되면 컴포넌트는 다시 렌더링된다.
 - React는 상태를 기반으로 UI를 다시 계산하고 필요한 부분만 업데이트한다.

## 기본 문법

```
const [state, setState] = useState(initialValue);
```

 - state : 현재 상태 값
 - setState : 상태를 변경하는 함수
 - initialValue : 초기 상태 값

## 사용 예시

```javascript
const [count, setCount] = useState(0);

return (
  <>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>
      증가
    </button>
  </>
);
```

---

## 상태 변경

```javascript
    setCount(10);
```

상태가 변경되면

1. Render Phase
2. Reconciliation
3. Commit Phase
4. useLayoutEffect
5. Paint
6. useEffect

순으로 다시 렌더링이 진행된다.

---

## 이전 상태를 사용하는 경우

이전 상태를 기반으로 변경할 때는 함수형 업데이트를 사용하는 것이 안전하다.

```javascript
    setCount(prev => prev + 1);
```

### 이유

```javascript
    setCount(count + 1);
    setCount(count + 1);
```

위 코드는 두 번 모두 같은 `count` 값을 참조할 수 있다.

반면

```javascript
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
```

이전 상태를 순차적으로 받아오기 때문에 원하는 결과를 얻을 수 있다.


## 객체 상태 변경

객체는 기존 값을 복사하여 변경한다.

```javascript
    const [user, setUser] = useState({
        name: "Kim",
        age: 20,
    });

    setUser(prev => ({
        ...prev,
        age: 21,
    }));
```


## 배열 상태 변경

배열도 새로운 배열을 만들어 변경한다.

```javascript
    setList(prev => [...prev, newItem]);
```


## 주의사항

 - state를 직접 변경하면 안 된다.
```javascript
/** 올바르지 않은 사용 */
    user.name = "Lee";
```


```javascript
/** 올바른 사용 */
    setUser(prev => ({
        ...prev,
        name: "Lee",
    }));
```


## 특징
 - 상태가 변경되면 컴포넌트가 다시 렌더링된다.
 - state는 불변성(Immutable)을 유지해야 한다.
 - 여러 개의 state를 선언할 수 있다.

```javascript
    const [name, setName] = useState("");
    const [age, setAge] = useState(20);
```