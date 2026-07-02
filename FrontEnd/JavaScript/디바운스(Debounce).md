# 디바운스 (Debounce)
 - 이벤트 가 발생한 뒤 일 정 시간 이 지나야 실행 되게 하는 기법 

## 개념 
 - 사용자 가 입력 을 멈춘 뒤 일정 시간 이 지나면 함수 실행
 - 연속 해서 호출 되면 타이머 를 초기화 해서 마지막 호출 만 실행
 - 빠르게 여러번 실행 ⇒ 한번 만 실행
 ```javascript
    const debounce = (fn, delay) => {
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };
```

## 사용 시기 
 - 검색 자동완성 API 호출 시
 - resize 이벤트 처리 (창 크기 변경 끝난 후)
 - 버튼 연속 클릭 방지
 - 입력 폼 검증