import { Request, Response, NextFunction } from "express"

export default (req: Request, _res: Response, next: NextFunction) => {
    console.log("Origin: ", req.headers.host);
    console.log("Timestamp: ", new Date())
    next();
}

