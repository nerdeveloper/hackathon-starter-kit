
const sgTransport = require('nodemailer-sendgrid-transport');
import nodemailer from 'nodemailer';
let mail:any = {};
const transport = nodemailer.createTransport(
  
    sgTransport({
      service: 'SendGrid',
      auth: {
        user: "Enter your username",
        pass: "Enter your password"

      }
    }),
  )


export const send = (req:any, res:any) => {
    const mailOptions = {
        to: process.env.EMAIL,
        from: `${req.body.name} <${req.body.email}>`,
        subject: 'Contact Form',
        text: req.body.message
      };
      transport.sendMail(mailOptions, function(err, data){
          if(err){
            req.flash("error", "Error! We did Something wrong");
            res.redirect('/contact');
          }
          else{
            req.flash("success", "Email has been sent successfully!");
            res.redirect('/contact');
            console.log(data);
          }
      });

}
