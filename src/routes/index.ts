import express from 'express';
import {Request, Response, NextFunction} from 'express'
import {check, sanitizeBody, body  } from 'express-validator';

const router = express.Router();
import * as authController from '../controllers/authController';
import * as indexController from '../controllers/indexController';

router.get('/',  indexController.home)
router.get('/contact',  indexController.contact) 

router.post('/contact',
[
    /**Check the form and validated it before submitting  */
    sanitizeBody('name'),
    check('name', 'Name cannot be blank').not().isEmpty(),
    sanitizeBody('surname'),
    check('surname', 'Name cannot be blank').not().isEmpty(),
    check('need', 'Your framework cannot be empty').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('email').normalizeEmail({
        gmail_remove_subaddress: false, // correct
        outlookdotcom_remove_subaddress: false,
        gmail_remove_dots: false,
        icloud_remove_subaddress: false,

    }),

    check('message', 'Message cannot be blank').not().isEmpty(),
    check('g-recaptcha-response', "Please validate your Google reCAPTCHA").not().isEmpty()

],
(req: Request, res: Response) => {
    indexController.contactForm(req, res);
});

router.get('/login', authController.login) ;

router.post('/login',
    [
        /**Check the form and validated it before submitting  */
        check('email', 'Email is not valid').isEmail(),
        check('email').normalizeEmail({
            gmail_remove_subaddress: false, // correct
            outlookdotcom_remove_subaddress: false,
            gmail_remove_dots: false,
            icloud_remove_subaddress: false,

        }),

        body("password", "Password cannot be blank").not().isEmpty(),
        check('g-recaptcha-response', "Please validate your Google reCAPTCHA").not().isEmpty()

    ],(req: Request, res: Response) => {
        authController.loginForm(req, res);
    });



router.get('/register', authController.register);

router.post('/register',
    [
        /**Check the form and validated it before submitting  */
        check('email', 'Email is not valid').isEmail(),
        check('email').normalizeEmail({
            gmail_remove_subaddress: false, // correct
            outlookdotcom_remove_subaddress: false,
            gmail_remove_dots: false,
            icloud_remove_subaddress: false,

        }),

        body("password", "Password cannot be blank").not().isEmpty(),
        check("confirmPassword", "Confirmed Password cannot be blank!").not().isEmpty(),
        check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
        check('g-recaptcha-response', "Please validate your Google reCAPTCHA").not().isEmpty()

    ],(req: Request, res: Response, next:NextFunction) => {
        authController.registerForm(req, res, next),
        authController.login;
    });





export default router;