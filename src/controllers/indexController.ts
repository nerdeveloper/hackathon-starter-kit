import { Request, Response, NextFunction } from "express";

export const home = (req: Request, res: Response) => {
    res.render('home', {title: 'Home'})
}