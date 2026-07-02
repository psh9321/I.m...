declare function Callbackk(x: number): void;
/**
 * 함수에서 return 을 해주지 않을때 void 를 선언함 (return 이 될시 에러)
 *
 * ? 의문문이 들어왔을때는 파라미터가 없어도 에러가 나지않음 (undefined 와 같음)
 */
declare function HomeWork01(txt?: string): string;
declare function HomeWork02(param: string | number): number;
declare function HomeWork03(income: number, isHouse: boolean, appeal: string): string | undefined;
