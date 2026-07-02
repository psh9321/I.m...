# i18n 
 - i18n(Internationalization)은 하나의 애플리케이션에서 여러 언어와 지역(Locale)을 지원할 수 있도록 구조를 설계하는 것을 의미한다.
 - React에서는 일반적으로 `i18next`와 `react-i18next`를 사용하여 i18n을 구현한다.


## 설치 
 - npm i i18next i18next-http-backend i18next-browser-languagedetector react-i18next
 - pnpm add i18next i18next-http-backend i18next-browser-languagedetector react-i18next


## 특징
 - `i18next-http-backend`는 JSON 번역 파일을 HTTP로 불러오는 Backend 플러그인이다.
 - 한 번 로드한 번역 데이터는 메모리에 캐싱되므로 같은 언어의 번역 파일은 다시 HTTP 요청하지 않는다.
 - `i18next-browser-languagedetector`는 브라우저의 언어를 자동으로 감지하여 초기 언어를 설정한다.
 - `i18next-browser-languagedetector`는 기본적으로 선택한 언어를 `localStorage(i18nextLng)`에 저장하여 새로고침 후에도 동일한 언어를 유지한다.
 - JSON 번역 파일(예: `public/language/ko.json`)을 사용하는 경우 `i18next-http-backend`가 필요하다.
 - 코드의 `resources` 옵션으로 번역 데이터를 직접 관리하는 경우 `i18next-http-backend`는 필요하지 않다.


## 각 라이브러리 역할 
| 라이브러리                              | 역할                                      
| ---------------------------------- | --------------------------------------- 
| `i18next`                          | i18n 엔진(핵심)                             
| `react-i18next`                    | React와 i18next 연결                       
| `i18next-http-backend`             | `/language/ko.json` 같은 번역 파일을 HTTP로 가져옴 
| `i18next-browser-languagedetector` | 브라우저 언어를 감지하여 초기 언어 결정            


## 현재 코드 동작 순서
1. 브라우저 실행
        │
        ▼
2. LanguageDetector
   └─ 브라우저 언어 확인 (ko, en ...)
        │
        ▼
3. HttpApi
   └─ /language/ko.json 요청
        │
        ▼
4. 번역 데이터 메모리 캐싱
        │
        ▼
5. react-i18next
   └─ React 컴포넌트에서 t() 사용 가능