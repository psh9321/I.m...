import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PracticeRouter } from "./routers/practice.router";

const App = new Hono();

App.get("/health", async c => c.text(`hono health check success!!`));


App.route("",PracticeRouter);

serve({
    port : 9999,
    fetch : App.fetch
}, () => { 
    console.log("connect")
})