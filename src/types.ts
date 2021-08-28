import { Response, Request } from "express";


export type MyContext = {
    req: Request & {session: any} ,
    res : Response,
}