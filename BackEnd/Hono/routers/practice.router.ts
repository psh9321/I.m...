import { Hono } from "hono";

const PracticeRouter = new Hono();

const url = "/practice"

PracticeRouter.get(`${url}`, async c => {
    try {
        return c.json("hono Get Success")
    }
    catch(err) {
        throw c.json("hono Get Error")
    }
})

PracticeRouter.post(`${url}`, async c => {
    try {

        const param = await c.req.json()

        return c.json({
            data : param,
            message : `hono Post ${url} success`
        })
    }
    catch(err) {
        throw c.json("hono Post Error")
    }
})

export { PracticeRouter }