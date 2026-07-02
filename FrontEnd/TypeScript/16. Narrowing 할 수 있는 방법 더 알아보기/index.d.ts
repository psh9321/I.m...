type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function 함수우(animal: Fish | Bird): string;
type Car2 = {
    wheel: '4개';
    color: string;
};
type Bike = {
    wheel: '2개';
    color: string;
};
declare function 함수2(x: Car2 | Bike): void;
