import { Request, Response } from "express";

export function SayHi(req: Request, res: Response) {
    res.json({
        message: "hello"
    })
}