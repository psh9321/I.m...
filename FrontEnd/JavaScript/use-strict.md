# use strict 
 - JavaScript 를 좀더 엄격한 규칙으로 실행하도록 하는 지시문 

## 비엄격 모드
```javascript
    /** 비엄격 모드에서는 window.name 에 종속됨 */
    name = "su hyun"

    for(item of [1,2,3]) {
        console.log(item) /** 1, 2, 3 */
    }
```

## 엄격 모드
```javascript
    "use strict"

    name = "su hyun" /** ReferenceError: name is not defined */

    for(item of [1,2,3]) {
        console.log(item) /** ReferenceError: item is not defined */
    }

    /** 에러가 발생 함으로 변수 키워드를 붙여줘야한다  */ 

    const name = "su hyun";

    for(const item of [1,2,3]) {
        console.log(item) /** 1, 2, 3 */
    }
```