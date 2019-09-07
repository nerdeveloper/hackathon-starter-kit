import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { User } from "../models/User";
import passport from 'passport';
import '../handlers/passport';



export const login = (req: Request, res: Response) => {
    res.render('login', { title: 'Login' })
}

export const loginForm = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //@ts-ignore
            req.flash('error', errors.array().map(err => err.msg));
            res.render('login', {
                title: 'Login',
                body: req.body,
                flashes: req.flash()
            });
        } else {
            if (!req.body.email || !req.body.password) {
                req.flash('error', 'Something is wrong with your input')
            }
           await passport.authenticate('local', (err:any, user:any) => {
                if(err || !user) {
                    req.flash("error", "Invalid Email address or Password")
                    res.redirect('/login')
                    return;
                    
                }
                req.login(user, (err) => {
                    if(err){
                        console.log('hello');
                       return req.flash('error', 'Authentication failed!');
                    } else{
                        req.flash("success", "Login Successful!");
                        res.redirect('/contact');
                    }

                  return
                  
                })
            })(req, res)
        }

    } catch (e) {

        res.redirect('/register');
        throw new Error(e)
    }

}

exports.isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    // check if the user is authenticated
    if (req.isAuthenticated()) {
        next(); // carry on to the login
        return;
    } else {
        req.flash('error', 'Oops, you must be logged in to do that!');
        res.redirect('/login');
    }
}
export const register = (req: Request, res: Response) => {
    res.render('register', { title: 'Register' })
}

export const registerForm = async (req: Request, res: Response, next: NextFunction) => {

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
        } else {
            const user = new User({ email: req.body.email });
            await User.register(user, req.body.password, function (err, user) {

                if (err) {
                    req.flash(`error`, `${err.message}`);
                    res.redirect('/register')
                } else {
                    passport.authenticate('local', {
                        session: true
                    })(req, res, () => {
                    req.flash(`success`, `${req.body.email} has been registered! Please Login`);
                    res.redirect('/login')
                    })
                    
                }
            })
        }

    } catch (e) {

        res.redirect('/register');
        throw new Error(e)
    }

}
