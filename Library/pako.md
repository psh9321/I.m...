# pako
 - Pako는 JavaScript에서 gzip, zlib, deflate 압축과 해제를 수행할 수 있는 라이브러리이다.
 - C 언어로 작성된 zlib를 JavaScript로 포팅한 구현체로, 브라우저와 Node.js 모두에서 사용할 수 있다.
 - 주로 큰 문자열이나 JSON 데이터를 압축하여 전송 크기 감소, 쿠키 저장 용량 절약, 로컬 저장소(LocalStorage) 용량 절약 등에 사용된다.


## 설치
 - npm i pako
 - pnpm add pako


## 사용예시 
```ts
    import pako from "pako"

    /**
     * 문자 압축 인코딩
     * @param {string} str base64 인코딩할 문자
     */
    function CompressData(str) {
        const compressStr = pako.deflate(str, {level : 9});
        
        const base64Str = Buffer.from(compressStr).toString("base64");

        return base64Str
    }

    /**
     * 압축 문자 디코딩
     * @param {string} encodeStr base64 인코딩 된 문자
     */
    function deCompressData(encodeStr) {

        if(!encodeStr || encodeStr === "null") return null;

        const deCompressStr = Buffer.from(encodeStr,"base64");

        const result = pako.inflate(deCompressStr, {to : "string"});

        return result
    }
```
