// export const park = 94 /** 타입 스크립트끼리 변수 주고 받을때 */

const park = 94

/**
 * declare 는 타입스크립트 간 글로벌 변수, 타입, 인터페이스 만들때 사용
 */
declare global {
    type Dog = string
}

/** 타입스크립트 파일끼리는 import export 없이도 사용가능 */

export {} /** 이 타입스크립트 파일은 로컬 모듈이 됨 */