/** 물음표 붙이는건 맨뒤에서 부터 붙여야함 */
declare const arr22: [string, boolean, number?];
/**
 * ...x 은 rest 파라미터이고
 * 파라미터가 여러개일때 x 를 콘솔 찍어보면 배열에 담긴 파라미터들이 출력됨
 *
 * @param x
 */
declare function callback94(...x: [number, string]): void;
declare const arr12: number[];
declare const arr34: [number, number, ...number[] /** 세번째 부터 숫자가 여러개 들어올수있는데 몇개나 들어올지 모를때 */];
/** homework01 */
declare const homework001: [string, number, boolean];
/** homework02 */
declare const homework022: [string, number, ...boolean[]];
/** homework03 */
/** 내가한거 */
/** 답(?) */
declare function homework003(...rest: [string, boolean, ...(number | string)[]]): void;
type abc = [string[], number[]];
/** homework4 */
declare function homework004(...rest: (string | number)[]): [...any[]] | [string[], number[]];
