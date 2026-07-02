# Cache
 - Next.js는 `fetch()` 요청 결과를 캐싱하여 불필요한 API 호출을 줄이고 성능을 향상시킨다.
 - `fetch()`의 `cache`와 `next.revalidate` 옵션을 통해 캐시 전략을 설정할 수 있다.
 - 데이터의 특성에 따라 항상 최신 데이터를 조회하거나 일정 시간 동안 캐시를 유지할 수 있다.
 - 서버에 데이터를 캐싱하여 동일한 API 요청에 대한 중복 호출을 줄일 수 있다.


## 언제 사용하는가?
 - 자주 변경되지 않는 데이터 조회
 - 동일한 API 요청의 중복 호출 방지
 - 초기 페이지 로딩 성능 향상
 - 서버 부하 감소


## cache : "force-cache" : 기본 캐시 전략
 - 캐시된 데이터가 있으면 재사용한다.
 - 캐시가 없으면 API를 호출하고 결과를 캐시에 저장한다.
 ```ts
    const data = await fetch(url, {
        cache: "force-cache",
    });
 ```


## cache : "no-store" : 항상 최신 데이터를 조회
 - 요청마다 API를 호출한다.
 - 캐시를 사용하지 않는다.
 - 실시간 데이터에 적합하다.
 ```ts
    const data = await fetch(url, {
        cache: "no-store",
    });
 ``` 


## revalidate : 일정 시간 동안 캐시를 유지
 - 60초 동안 캐시를 사용한다.
 - 60초 이후 요청이 들어오면 새로운 데이터를 조회하고 캐시를 갱신한다.
 - `force-cache`와 달리 일정 시간이 지나면 캐시를 자동으로 무효화하고, 다음 요청 시 새로운 데이터를 조회하여 캐시를 갱신한다.
 ```ts
    const data = await fetch(url, {
        next: {
            revalidate: 60,
        },
    });
 ```
