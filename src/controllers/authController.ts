import {Request, Response, NextFunction} from "express";
import {validationResult} from "express-validator";
import {User} from "../models/User";
import passport from "passport";
import "../handlers/passport";

export const login = (req: Request, res: Response) => {
    if (req.user) {
        return res.redirect("/");
    }
    res.render("login", {title: "Login"});
};

export const logout = (req: Request, res: Response) => {
    req.logout();
    req.flash("success", "You are now logged out! 👋");
    res.redirect("/");
};

export const loginForm = (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //@ts-ignore
            req.flash("error", errors.array().map(err => err.msg));
            res.render("login", {
                title: "Login",
                body: req.body,
                flashes: req.flash(),
            });
        } else {
            if (!req.body.email || !req.body.password) {
                req.flash("error", "Something is wrong with your input");
            }

            passport.authenticate("local", {
                failureRedirect: "/login",
                successReturnToOrRedirect: "/",
                successFlash: "You are now logged in!",
            })(req, res);
        }
    } catch (e) {
        res.redirect("/register");
        throw new Error(e);
    }
};

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    // check if the user is authenticated
    if (req.isAuthenticated()) {
        return next(); // carry on to the login
    } else {
        req.flash("error", "Oops, you must be logged in to do that!");
        res.redirect("/login");
    }
};
export const register = (req: Request, res: Response) => {
    res.render("register", {title: "Register"});
};

export const registerForm = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //@ts-ignore
            req.flash("error", errors.array().map(err => err.msg));
            res.render("register", {
                title: "Register",
                body: req.body,
                flashes: req.flash(),
            });
        } else {
            const user = new User({email: req.body.email});
            await User.register(user, req.body.password, function(err) {
                if (err) {
                    req.flash("error", `${err.message}`);
                    res.redirect("/register");
                } else {
                    req.flash("success", `${req.body.email} has been registered! Please Login`);
                    res.redirect("/login");
                }
            });
        }
    } catch (e) {
        res.redirect("/register");
        throw new Error(e);
    }
};
