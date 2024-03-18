import express, { Request, Response } from 'express';
import next from "next";
import ip from "ip";

// envairoments
const port = 3000;
const dev = process.env.NODE_ENV === "development";
const app = next({ dev: dev });
const handle = app.getRequestHandler();

import { apisys } from "./api"
import { ethapi } from "./w3/eth"
const ipaddr = ip.address();
(async () => {
    await app.prepare();
    const server = express();
    const apiresponsepath = "/api/exec";
    // api test
    server.use(apiresponsepath, apisys);
    server.use(apiresponsepath, ethapi);
    // /api/v1/user?id=1

    // logging middleware all requests
    server.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });
    server.get("*", (req: Request, res: Response) => {
        console.log("request to " + req.url);
        return handle(req, res);
    });

    server.post("*", (req: Request, res: Response) => {
        console.log("request to " + req.url);
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`
        > Ready on http://127.0.0.1:${port}/ 
        > Ready on http://${ipaddr}:${port}/
        env ${process.env.NODE_ENV}
        `);
    });
})();