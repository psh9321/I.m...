
/** homework01 */
let person = { student : true, age : 20 }


type ObjType = {
    student : boolean,
    age : number
}

function 함수({student, age} : ObjType) : void{
  console.log(student, age)
}
// 함수({ student : true, age : 20 })

/** homework02 */


function Callback94(...param : number[]) : number {
    
    if(param.length <= 0) return -1

    let no = 0;
    
    for(let i = 0; i < param.length; i ++){
        let item = param[i];
        
        if(item > no) no = item;
    }
    
    
    return no
}
 
console.log(Callback94(1,90, 2,3,4,5,6, 1994, 711))