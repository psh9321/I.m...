class Human {
    
    name : string;

    constructor(name : string) {
        this.name = name
    }
}

const me = new Human("su hyun");

/** homework01 */
class Car {
    name : string;
    price : number;

    constructor(name : string, price : number) {
        this.name = name;
        this.price = price;
    }

    tax() : number {
        return this.price * 0.1;
    }
}

let 소나타 = new Car("소나타", 4300);
// console.log(소나타.tax())

/** homework02 */
class Word {

    numberArr : number[];
    stringArr : string[];
    exceptionArr : any[];

    constructor(...args : any /** 모든 유형의 자료 */) {

        this.numberArr = [];
        this.stringArr = [];
        this.exceptionArr = [];

        if(args.length <= 0) return 

        for(let i = 0; i < args.length; i++){

            let item = args[i];
            
            switch (typeof item) {
                case "number": this.numberArr.push(item); break;
                case "string": this.stringArr.push(item); break;
                default: this.exceptionArr.push(item); break;
            }
        }
    }
}

let homework02 = new Word(1,"2",3, 4, false, undefined, "77");

console.log(homework02)