# this
 - 현재 실행된 함수가 어떤 객체를 통해 호출되었는지 가르키는 참조값

1. 전역에서의 this
 - 브라우저 일반 스크립트 전역에서는 this 가 window 를 가르킨다.
 - ES Module 이나 Node.js 환경에서는 전역 this 가 undefined 이거나 환경에 따라 다르게 동작할수있다.
```javascript
    console.log(this) /** window */
```


2. 객체의 메서드에서의 this 
 - 객체를 통해 호출되면 this 는 해당객체를 가르킨다.
 ```javascript
    const user = {
        name: "su hyun",
        firstName : "Park",
        hello() {
            console.log(this.name) /** su hyun */
        }
    };

    user.hello();
    /** user 를 통해 호출했기에 this 는 해당객체를 가르킨다. */
 ```


3. 일반 함수에서의 this 

```javascript
    function hello() {
        console.log(this);
    }

    hello(); /** 일반 함수로 호출했기 때문에 브라우저 비엄격 모드에서는 window, use strict 에서는 undefined */
```


4. 화살표 함수의 this 
 - 화살표 함수는 자신만의 this 를 가지지 않고 함수가 선언된 위치의 this 를 그대로 사용한다
```javascript
    const user = {
        name: "su hyun",

        hello() {
            const print = () => {
                console.log(this.name);
            };

            print();
        }
    };

    user.hello(); /** 화살표 함수는 자신만의 this를 가지지 않는다. hello()의 this(user)를 그대로 사용한다. */
```


5. 생성자 함수에서의 this
 - new 로 새로 생성했을때는 새롭게 생성된 객체를 가리킨다.
```javascript
    function User(name) {
        this.name = name;
    }

    const user = new User("su hyun");

    console.log(user.name);
```


6. call, apply, bind

 - call() : this 를 직접 지정하고 즉시 함수를 실행한다.
```javascript
    function hello() {
        console.log(this.name);
    }

    const user = {
        name: "su hyun"
    };

    hello.call(user); /** user 를 this 로 지정해 즉시 실행 */
```

 - apply() : this 를 직접 지정하고 즉시 함수를 실행한다. call 과 다르게 함수의 인자를 배열로 전달한다.
```javascript
    function hello(age, city) {
        console.log(this.name, age, city);
    }

    const user = {
        name: "su hyun"
    };

    hello.apply(user, [30, "Seoul"]); /** su hyun 30 Seoul */
```

 - bind() : this를 지정한 새로운 함수를 반환하고 즉시 실행하지 않는다. 그래서 주로 eventListener에서 주로 사용함
```javascript
    function hello() {
        console.log(this.name);
    }

    const user = {
        name: "su hyun"
    };

    const bindHello = hello.bind(user);

    bindHello(); // su hyun
```