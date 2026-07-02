# Hydration
 - 서버에서 렌더링된 HTML과 브라우저에서 실행된 React를 연결하여 이벤트와 상태를 활성화하는 과정이다.
 - SSR로 전달된 HTML은 처음에는 정적인 화면이므로 클릭, 입력 등의 상호작용이 불가능하다.
 - 브라우저가 JavaScript를 다운로드한 후 React가 기존 HTML과 연결(Hydration)하면서 상호작용이 가능한 페이지가 된다.


## 동작 과정
 1. 사용자가 페이지를 요청한다.
 2. 서버가 React 컴포넌트를 HTML로 렌더링한다.
 3. 브라우저가 HTML을 먼저 화면에 출력한다.
 4. JavaScript 번들을 다운로드한다.
 5. React가 기존 HTML과 Virtual DOM을 연결(Hydration)한다.
 6. 이벤트와 상태가 활성화되어 사용자가 페이지와 상호작용할 수 있다.


## Hydration Mismatch
 - 서버에서 생성한 HTML과 브라우저에서 React가 생성한 Virtual DOM이 서로 다를 때 발생하는 문제이다.
 - React는 두 결과가 일치한다고 가정하고 Hydration을 수행하므로, 내용이 다르면 경고가 발생한다.


#### 면접 답변
Hydration은 SSR로 생성된 정적인 HTML과 브라우저에서 실행된 React를 연결하여  이벤트와 상태를 활성화하는 과정입니다. 이를 통해 초기 화면을 빠르게 보여주면서도 React의 동적인 기능을 사용할 수 있습니다.