import { Request, Response, NextFunction } from "express";
import { validationResult, } from 'express-validator';
const sgTransport = require('nodemailer-sendgrid-transport');
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  sgTransport({
    service: 'SendGrid',
    auth: {
      api_key: "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",
    }
  }),
)
export const home = (req: Request, res: Response) => {
  res.render('home', { title: 'Home' })
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



      const mailOptions = {
        to: 'odirionye@gmail.com',
        from: `${req.body.name} <${req.body.email}>`,
        subject: 'Contact Form',
        text: req.body.message
      }

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log('error')
          req.flash("error", "Error! We did Something wrong");
          res.redirect('/contact');

        }
        else {
          req.flash("success", "Email has been sent successfully!");
          res.redirect('/contact');
          console.log(data);
        }

      });
    }
    return;
  } catch (e) {
    res.redirect('/contact');
  }

}

