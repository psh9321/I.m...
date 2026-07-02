# React
 - React는 Meta에서 개발한 사용자 인터페이스(UI)를 구축하기 위한 JavaScript 라이브러리이다.
 - 컴포넌트(Component) 기반으로 화면을 구성하여 재사용성과 유지보수성을 높일 수 있다.
 - 상태(State)가 변경되면 필요한 부분만 다시 렌더링하여 UI를 효율적으로 갱신한다.
 - Virtual DOM을 사용하여 실제 DOM 변경을 최소화하고 렌더링 성능을 향상시킨다.


## (⭐️ 중요) 컴포넌트 네이밍에 대해
 - 컴포넌트 같은경우 Pascal Case 로 네이밍 해야한다.
 - 소문자로 시작하면 문자열 태그로 변환된다. 
 ```
   React.createElement("div")
 ```
 - 대문자로 시작하면 변수/함수 컴포넌트 참조로 변환된다.
 ```
   React.createElement(UseQueryPageView)
 ```
 - 소문자로 컴포넌트 네이밍이 시작될시 "'JSX.IntrinsicElements' 형식에 'useQueryPageView' 속성이 없습니다." 에러 난다.