import { Request, Response, NextFunction } from "express";


export const login= (req: Request, res: Response) => {
  res.render('login', { title: 'Login' })
}


export const register = (req: Request, res: Response) => {
    res.render('register', { title: 'Register' })
  }
  
  
  