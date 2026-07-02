# 쓰로틀 (Throttle)

 - 일정 시간 동안 함수 가 한번 만 실행 되게 끔 하는 기법

## 개념 
 - 1초 동안 스크롤 이벤트 가 100번 발생해도, throttle 200ms 라면 200ms마다 한번 씩만 실행 됨
 - 이벤트 가 자주 발생해도 주기적으로 실행됨
 ```javascript
    const throttle = (fn, delay) => {
        let last = 0;
        return (...args) => {
            const now = Date.now();

            if (now - last >= delay) {
                last = now;
                fn(...args);
            }
        };
    };

 ```

## 사용 시기 
 - 스크롤 위치 계산 (무한 스크롤, sticky UI)
 - window resize (실시간 반응)
 - 마우스 드레그, 터치 움직임
 - 빈번한 UI 업데이트