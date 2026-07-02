# Effect
 - 컴포넌트 렌더링 자체에서 처리할수 없는 작업 을 수행 하는 메커니즘
 - 컴포넌트 렌더링 과정에서 처리하면 안 되는 부수 효과(Side Effect)를 수행한다.

## 생명주기 
 - 생성 (Mounting) : 컴포넌트가 처음 DOM 에 삽입 되는 과정
 - 업데이트 (Updating) : 컴포넌트 상태 (state) 나 속성 (props)이 변경될 때 발생
 - 소멸 (Unmounting) : 컴포넌트에서 제거 되는 과정


## 컴포넌트 렌더링 자체 에서 처리할 수 없는 작업 
 - 데이터 Fetching(API 요청)
 - 이벤트 리스너 등록/해제
 - Timer(setTimeout, setInterval)
 - localStorage, sessionStorage 접근
 - 외부 라이브러리 초기화(Map, Chart, Swiper 등)


## Effect 파라미터 

1. Setup 함수
 - Effect에서 실행할 로직을 작성하는 함수
 - Cleanup 함수를 반환(return)할 수 있다.

### Cleanup 함수 
 - 이전 Effect를 정리하는 함수
 - 컴포넌트가 Unmount될 때 실행된다.
 - 의존성이 변경되어 Effect가 다시 실행되기 직전에도 실행된다.

2. 의존성 배열 
 - Effect 가 다시 실행될 조건 을 결정 하는 배열. 생략 시 매 렌더링 마다 실행
 - 값을 넣을 시 그 값이 변할때마다 실행
 - [] 빈배열을 넣을 시 최초 mount 시 1회 만 실행

### 의존성 배열 을 빠뜨리면 발생 하는 문제
 - stale closure(오래된 상태) 문제
 - 업데이트가 반영 되지않음
 - 오래된 값을 기준 으로 API 요청됨
 - eslint-plugin-react-hooks가 누락된 의존성을 경고해 줄 수 있다.
 

## useEffect 
 - 렌더링 ⇒ DOM 반영 ⇒ 브라우저 페인팅 후 실행 : 화면 이 그려진 후 실행 되는 hook
 - 브라우저가 화면을 그린(Paint) 이후 실행되므로 UI 렌더링을 막지 않는다.


### 사용예시
 - 데이터 fetching
 - subscription 등록/해제 : setup 함수, Cleanup 함수
 - 타이머 : setTimeout, setInterval
 ```tsx
    useEffect(
        /** setup 함수 */
        () => {
        // subscription 등록 (구독, 이벤트, 타이머 등)
        
        /** Cleanup 함수 */
        return () => {
            // subscription 해제(정리) = 클린업
        };
    }, [state] /** 의존성 배열 */ );

 ```


## useLayoutEffect
 - 렌더링 ⇒ DOM 반영 ⇒ useLayoutEffect 실행 ⇒ 브라우저 페인팅
 - 브라우저가 화면을 그리기 전에 실행되므로 레이아웃 측정 및 동기적인 DOM 조작에 사용 
 - 잘못하면 Layout Thrashing, 성능 저하 가 발생 하므로 정말 필요한 경우에만 사용


### 사용예시 
 - DOM 사이즈 측정(getBoundingClientRect)
 - 레이아웃 보정
 - 스크롤 위치 즉시 이동
 - CSS 애니메이션 초기 위치 설정
  ```tsx
    useLayoutEffect(
        /** setup 함수 */
        () => {
        // subscription 등록 (구독, 이벤트, 타이머 등)
        
        /** Cleanup 함수 */
        return () => {
            // subscription 해제(정리) = 클린업
        };
    }, [state] /** 의존성 배열 */ );

 ```