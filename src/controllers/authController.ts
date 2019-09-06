import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { User } from "../models/User";



export const login = (req: Request, res: Response) => {
  res.render('login', { title: 'Login' })
}


export const register = (req: Request, res: Response) => {
    res.render('register', { title: 'Register' })
  }
  
export const registerForm = async (req: Request, res: Response, next: NextFunction ) => {

    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        //@ts-ignore
        req.flash('error', errors.array().map(err => err.msg));
        res.render('register', {
          title: 'Register',
          body: req.body,
          flashes: req.flash()
          });
      }else {
         const user = new User({ email: req.body.email });
          await User.register(user, req.body.password, function(err, user){
    
             if(err){
                req.flash(`error`, `${err.message}`);
                res.redirect('/register')
             }else{
                req.flash(`success`, `${req.body.email} has been registered! Please Login`);
                res.redirect('/login')
             }
         })
        } 
   
    } catch (e) {
      
      res.redirect('/register');
      throw new Error(e)
    }
  
  }
  