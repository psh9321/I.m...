type Fish = { swim: string };
type Bird = { fly: string };

function 함수우(animal: Fish | Bird) : string {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
} 

console.log(함수우({swim : "true"}))


type Car2 = {
    wheel : '4개',
    color : string
  }
  type Bike = {
    wheel : '2개',
    color : string
  }
  
  function 함수2(x : Car2 | Bike){

    if (x.wheel === "4개"){
      console.log(`이 차는 ${x.color}`)
    } 
    else {
      console.log(`이 바이크는 ${x.color}`)
    }
  }