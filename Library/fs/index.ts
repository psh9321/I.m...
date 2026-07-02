import fs from "fs"
import path from "path"

function AddJSON(name : string, data : any) {
    try {
        const filepath = path.join(`${__dirname}/public` ,`${name}.json`);

        if(fs.existsSync(filepath)) return console.log("이미 해당 이름의 JSON 파일이 있음")

        const contents = `${JSON.stringify(data, null, 2)}`;

        fs.writeFileSync(filepath, contents, "utf-8");
    }
    catch(err) {
        console.log(err, "json 파일 생성 실패")
    }

}

function DeleteJSON(name : string) {
    try {
        const filepath = path.join(`${__dirname}/public`, `${name}.json`);

        if(!fs.existsSync(filepath)) return console.log("해당 이름의 JSON 파일이 없음")

        fs.unlinkSync(filepath)
    }
    catch(err) {
        console.log(err, "json 파일 삭제 실패")
    }
}

function EditJSON(name : string, data : any) {
    try {

        const filepath = `${__dirname}/public/${name}.json`;

        if(!fs.existsSync(filepath)) return console.log("해당 이름의 JSON 파일이 없음")

        const item = fs.readFileSync(filepath, "utf-8");

        const newData = {
            ...JSON.parse(item),
            ...data
        };

        fs.writeFileSync(filepath, JSON.stringify(newData, null, 2))
    }
    catch(err) {
        console.log(err, "json 파일 수정 실패")
    }
}

function AddFolder(name : string) {
    try {
        const filepath = path.join(`${__dirname}/public`, name);

        if(fs.existsSync(filepath)) return console.log("이미 해당 이름의 폴더가 있음")

        fs.mkdirSync(filepath, {
            recursive : true /** public가 없더라도 순차적으로 만들라는 의미 */
        })
    }
    catch(err) {
        console.log(err, "폴더 생성 실패")
    }
}

function DeleteFolder(name : string) {
    try {
        const filepath = path.join(`${__dirname}/public`, name);

        /** 해당 폴더가 있는지 확인 */
        if(!fs.existsSync(filepath)) return console.log("해당폴더가 없음");

        fs.rmSync(filepath, {
            recursive : true, /** true 일 시 하위 폴더가 있어도 내용까지 전부 삭제 */
            force : false /** true 일 시 삭제할 파일이없어도 에러를 내지말고 그냥 넘어감 */
        })
    }
    catch(err) {
        console.log(err, "폴더 삭제 실패")
    }
}

// AddJSON("example", {
//     name : "su hyun",
//     job : "front-end-developer"
// })

// DeleteJSON("example")

// EditJSON("example", {name : "su hyun Park"})

// AddFolder("example")

// DeleteFolder("example")