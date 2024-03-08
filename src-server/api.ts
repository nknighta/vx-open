import express, {Request, Response} from "express";

export const apisys = express.Router();

apisys.get("/vx", (req: Request, res: Response, next) => {
    res.status(200).json(`VX API v0.3 VARIUS dev team and nknight amamiya 2023` + "\n" + " Hello World!");
});
