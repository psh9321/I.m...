"use strict"

const PracticeRouter = require("express").Router();

const url = "/practice";

PracticeRouter.get(`${url}`, async (req, res) => {
    try {
        res.status(200).send(`nestjs GET ${url} success`)
    }
    catch(err) {
        res.status(500).send(`nestjs GET ${url} 에러`)
    }
})

PracticeRouter.post(`${url}`, async (req, res) => {
    try {
        const param = req.body;
        res.status(200).send({
            data : param,
            message : `nestjs POST ${url} success`
        })
    }
    catch(err) {
        res.status(500).send(`nestjs GET ${url} 에러`)
    }
})

module.exports = { PracticeRouter }