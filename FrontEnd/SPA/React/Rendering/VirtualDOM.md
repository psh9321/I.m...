# Virtual DOM
 - 브라우저의 실제 DOM 을 추상화한, 메모리에 존재하는 가벼운 객체 트리 구조
 - 렌더 결과를 바로 DOM 에 반영하지않고, 먼저 Virtual DOM 에 그린 뒤 비교 해서 최소한의 변경만 실제 DOM 에 반영

## 동작 흐름 
 - 전체 DOM 을 갱신하는 게 아니라 필요한 부분만 갱신
 
 1. setState 호출 ⇒ 컴포넌트 재렌더링 
 2. 새로운 Virtual DOM 트리가 생성
 3. 이전 Virtual DOM 과 새로운 Virtual DOM 비교 
 4. 달라진 부분만 실제 DOM 에 패치 
 5. 브라우저는 최소한의 랜더링 만 수행  