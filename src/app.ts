
import express from 'express';

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import session from "express-session";
import errorhandler from "errorhandler";
import passport from 'passport';
import mongo from 'connect-mongo';
import path from "path";
import compression from "compression";  // compresses requests

import cors from 'cors';
const MongoStore  = mongo(session);
// Create Express server
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection,
        autoReconnect: true
    })
}));

// // Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

// // // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
// app.use(flash());
