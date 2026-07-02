import jwt, { type SignOptions, type JwtPayload } from 'jsonwebtoken';

function CreateToken(type : "access" | "refresh", data : any) {
    try {
        const options = {
            /** 
             * 토큰 유지 시간  
             * {number}h : 시간
             * {number}m : 분
             * {number}s : 초 
             * */
            expiresIn : type === "access" ? "1h" : "4h",

            /** 발급자를 나타내는 키 */
            issuer : "issuer key"
        } as SignOptions; 

        const result = jwt.sign(data, `{{${type} secret key}}`, options);

        return result
    }
    catch(err) {
        console.log(err, `${type} 토큰 생성 실패`)
    }
}

/**
 * 
 * @param type 토큰 타입
 * @param token 토큰
 * @returns {JwtPayload | null} 유요한 토큰이 아닐시 null
 */
function VerifyToken(type : "access" | "refresh", token : string) {
    try {

        jwt.verify(token, `{{${type} secret key}}`) as JwtPayload

        /** 유효하지 않을시 */
        return jwt.verify(token, `{{${type} secret key}}`) as JwtPayload
    }
    catch(err) {
        return null
    }
}

const accessToken = CreateToken("access", {id : "testId", name : "test name"});

const refreshToken = CreateToken("refresh", {id : "testId", name : "test name"});

const accessTokenVerify = VerifyToken("access", accessToken as string)


// console.log(accessToken, " = access token")
// console.log(accessTokenVerify, " = verify token")