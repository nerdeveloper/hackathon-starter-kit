import passport from 'passport';


import { User } from "../models/User";
import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());