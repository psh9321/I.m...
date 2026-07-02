import { AES, enc } from "crypto-js";

/** 문자화 된 데이터 를 암호화 함 */
export function DataEncrypt(param: string | [] | object): string {
    const paramsStr = typeof param === "string" ? param : JSON.stringify(param);

    const data = AES.encrypt(paramsStr, "{{secret key}}");

    const result = data.toString();

    return result;
}

/** 암호화된 문자열을 복호화 함 */
export function DataDecrypt(encryptStr: string) {
    const decrypt = AES.decrypt(encryptStr, "{{secret key}}");

    const parseStr = decrypt.toString(enc.Utf8);

    const result = JSON.parse(parseStr);

    return result;
}


const encrypt = DataEncrypt({
    name : "su hyun",
    job : "developer"
})

console.log(encrypt, "encrypt");

const decrypt = DataDecrypt(encrypt);

console.log(decrypt, "decrypt")