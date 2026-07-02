# Intercepting Route
 - Next.js App Router에서 현재 페이지를 유지한 채 다른 Route를 가로채(Intercept) 렌더링하는 기능이다.
 - 주로 목록 페이지 위에 상세 페이지를 모달(Overlay) 형태로 표시할 때 사용한다.
 - URL은 상세 페이지로 변경되지만, 배경은 기존 페이지를 유지하여 사용자 경험을 향상시킨다.


## 폴더 구조
```
    app
    ├── resumes
    │   ├── page.tsx
    │   └── [id]
    │       └── page.tsx
    └── @modal
        └── (.)resumes
            └── [id]
                └── page.tsx
```


## 동작 과정
 1. 사용자가 목록 페이지에 접속한다.
 2. 상세 항목을 클릭한다.
 3. URL은 상세 페이지로 변경된다.
 4. Next.js가 상세 Route를 가로채 현재 페이지 위에 모달 형태로 렌더링한다.
 5. 모달을 닫으면 목록 페이지 상태를 유지한 채 이전 화면으로 복귀한다.