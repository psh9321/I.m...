# express-fileupload
 - express-fileupload는 Express에서 파일 업로드를 쉽게 처리할 수 있도록 도와주는 미들웨어이다.
 - multipart/form-data 요청을 파싱하여 업로드된 파일을 req.files에서 사용할 수 있게 해준다.
 - 설정이 간단하여 소규모 프로젝트나 빠른 프로토타이핑에 적합하다.


## 사용방법 
 - express-fileupload는 multipart/form-data 형식의 요청만 파싱하기 때문에 클라이언트에서  File 객체를 담은 formData 를 서버로 전송해야한다.



```js

    const express = require("express");
    const fileUpload = require("express-fileupload");
    const path = require("path");

    const { v4 } = require("uuid");

    const app = express();

    app.set("view engine","ejs");

    app.use(fileUpload());

    app.use("/abc",express.static("files"))

    // app.use(express.static('public'));
    app.use(express.static('uploads'));

    const fs = require("fs");

    /**
     * 파일이 저장될 경로 + 랜덤생성한 파일이름을 리턴함
     * @param {string} target 유저의 서브 아이디?
     * @param {string} fileName 업로드한 파일 이름
     * @returns {string}
     */
    const createFilePath = (target, originalName) => {
        const fileName = v4()+new Date().getTime()+path.extname(originalName);

        return path.join(__dirname, target, fileName);
    }

    app.listen(9999, function() {
        console.log("connect")
        app.get("/",(req, res) => {
            res.render("index")
        })
        
        app.post("/upload",(req, res) => {
            const data = req.files

            if(!data || !data["item"]) return res.status(400).send({errMsg : "error", resultCode : 404, data : data});

            if(Array.isArray(data["item"])) {

                let arr = data["item"];

                for(let i = 0; i < arr.length; i++){

                    let result = createFilePath(fileStorage, arr[i].name);

                    arr[i].mv(result, (err) => {
                        console.log(err,"err");
                        result.push(result)
                    });
                    
                    if(i === arr.length-1) {
                        res.status(200).send(arr)
                    }
                }
                
            }
            else {

                let obj = data["item"];

                let result = createFilePath(fileStorage, obj.name)

                obj.mv(result, (err) => {
                    console.log(err,"err");
                });
                
            }

        })

        app.get("/down",(req, res) => {
            // const path = path.join(__dirname, "26b65cea-cb74-4cc3-a83f-70bd8c23f58b1723547412902.xlsx");
            // const path = path.join(__dirname,"files");

            const stream = fs.createReadStream(`${__dirname}/files/26b65cea-cb74-4cc3-a83f-70bd8c23f58b1723547412902.xlsx`);

            // res.setHeader('Content-Disposition', `attachment; filename=${filename}`)
            stream.pipe(res);

            
            // res.download(`${__dirname}/files/26b65cea-cb74-4cc3-a83f-70bd8c23f58b1723547412902.xlsx`,"abc.xlsx", (err) => {
            //     console.log("err",err)
            // })
            // console.log()
        })
    })
```