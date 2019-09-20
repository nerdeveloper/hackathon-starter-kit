import { Request, Response, NextFunction } from "express";
import { validationResult, } from 'express-validator';
import * as mail from '../handlers/mail';
// const Recaptcha = require('express-recaptcha').RecaptchaV2;
// const  recaptcha = new Recaptcha(`${process.env.GOOGLE_SITE_KEY}`, `${process.env.GOOGLE_PRIVATE_KEY}`);


export const home = (req: Request, res: Response) => {
  res.render('home', { title: 'Home' });
  console.log(req.user);
}

export const contact = (req: Request, res: Response) => {
  res.render('contact')
}
export const contactForm = (req: Request, res: Response, ) => {

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //@ts-ignore
      req.flash('error', errors.array().map(err => err.msg));
      res.render('contact', {
        title: 'Contact',
        body: req.body,
        flashes: req.flash()
        });
    } else {
        mail.send(req, res)
 }
  } catch (e) {
    
    res.redirect('/contact');
    throw new Error(e)
  }

}

