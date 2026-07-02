# jQuery
 - JavaScript를 더 쉽고 간결하게 사용할 수 있도록 만든 라이브러리이다.
 - DOM 조작, 이벤트 처리, Ajax 등을 간단한 문법으로 사용할 수 있다.

## 사용 방법
 - jQuery를 사용하는 JavaScript 파일보다 먼저 스크립트를 불러와야 한다.
```
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


```

## 장점 
 - DOM 조작이 간단하다.
 - 코드가 짧고 직관적이다.


## 단점
 - 현재는 대부분의 기능을 JavaScript가 기본 제공한다.
 - React, Vue 등 Virtual DOM 기반 프레임워크에서는 DOM을 직접 조작하므로 거의 사용하지 않는다.


## 요소 선택
```html
    <p id="name">su hyun</p>
    <script>
        $("#name");
    </script>
```


## 요소 안 텍스트 변경
```html
    <p id="name">su hyun</p>
    <script>
        $("#name").text("Park su hyun"); /** <p id="name">Park su hyun</p> */
    </script>
```


## HTML 요소 추가 및 변경
```html
    <p id="name">su hyun</p>
    <script>
        $("#name").html("<span>Park su hyun</span>"); 
        /** 
         * <p>
         *     <span>Park su hyun</span>
         * </p>
         */
    </script>
```


## CSS 변경 
```html
    <p id="name">su hyun</p>
    <script>
        $("#name").css("color", "red");
    </script>
```


## 클래스 조작 
```html
    <p id="name">su hyun</p>
    <script>
        $("#name").addClass("active"); /** <p id="name" class="active">su hyun</p> */

        $("#name").removeClass("active"); /** <p id="name" class="">su hyun</p> */

        $("#name").toggleClass("active"); /** <p id="name" class="active">su hyun</p> */

        $("#name").toggleClass("active"); /** <p id="name" class="">su hyun</p> */
    </script>
```


## 이벤트 처리 
```html
    <p id="name">su hyun</p>
    <script>
        $("#name").on("click",() => {
            console.log("click")
        })
    </script>
```


## 값 가져오기 
```html
    <input class="input" type="text" value="su hyun" />

    <script>
        console.log($(".input").val()) /** su hyun */
    </script>
```


## 속성(Attribute)
```html
    <img id="image" src="image.png" alt="이미지" />

    <script>
        $("#image").attr("src","svg.svg"); /** <img id="image" src="svg.svg" alt="이미지" /> */
    </script>
```


## Ajax 
 - 현재는 fetch API나 Axios를 사용하는 경우가 대부분이다.
```javascript
    $.ajax({
        url: "/api",
        method: "GET",
        success(data) {
            console.log(data);
        }
    });
```


## DOM 이 로드된 후 실행
```javascript
    $(document).ready(function () {
        console.log("Ready");
    });

    $(function () {
        console.log("Ready");
    });
```