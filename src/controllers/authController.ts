import { Request, Response, NextFunction } from "express";


export const login= (req: Request, res: Response) => {
  res.render('login', { title: 'Login' })
}


