//@ts-ignore
import sgTransport from "nodemailer-sendgrid-transport";
import nodemailer from "nodemailer";
const transport = nodemailer.createTransport(
    sgTransport({
        service: "SendGrid",
        auth: {
            api_user: `${process.env.SENDGRID_USERNAME}`, //Enter your Sendgrid username
            api_key: `${process.env.SENDGRID_PASSWORD}`, // Enter your Sendgrid password
        },
    }),
);

export const send = (req: any, res: any) => {
    const mailOptions = {
        to: req.body.email, // Enter the email address that will receive emails. Defaults: Sends email to the `from` object.
        from: `${req.body.name} ${req.body.surname} <${req.body.email}>`,
        subject: `Choice of Framework is: ${req.body.need}`,
        text: req.body.message,
    };
    transport.sendMail(mailOptions, function(err) {
        if (err) {
            req.flash("error", "Error! We did Something wrong");
            res.redirect("/contact");
        } else {
            req.flash("success", "Email has been sent successfully!");
            res.redirect("/contact");
        }
    });
};
