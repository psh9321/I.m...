
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const { PracticeRouter } = require("./routers/practice.router");

const app = express();

app.use(bodyParser.json({limit : "1000mb"}));
app.use(bodyParser.urlencoded({limit : "1000mb", extended : true}));

const server = http.createServer(app);

app.use(PracticeRouter);

app.get("/health", (req, res) => {
    res.status(200).send("express health check!!")
})

server.listen(9999, () => {
    
    console.log("connect")
})