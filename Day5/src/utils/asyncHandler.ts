import type { Request, Response , NextFunction, RequestHandler } from "express";

type AsyncReqHandler<P = Record<string, string>> = (
    req:Request<P>,
    res:Response,
    next:NextFunction
)=>Promise<any>





export const AsyncHandler =<P = Record<string, string>>(fn:AsyncReqHandler<P>):RequestHandler<P>=>{
    return (req,res,next)=>{
        Promise.resolve(fn(req,res,next)).catch(next)
    }
}












