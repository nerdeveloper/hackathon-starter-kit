import express from 'express';
import {Request, Response, NextFunction} from 'express'
import {check, sanitizeBody, body  } from 'express-validator';
import 'connect-ensure-login' ;

const router = express.Router();
import * as authController from '../controllers/authController';
import * as indexController from '../controllers/indexController';
import * as postController from '../controllers/postController';
import { ensureLoggedIn } from 'connect-ensure-login';

function wrapAsync(fn:any) {
    return function (req: Request, res: Response, next: NextFunction) {
        fn(req, res, next).catch(next);
    };
}

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
       wrapAsync(authController.registerForm(req, res, next))
    });

 router.get('/logout', authController.logout) ;

 router.get('/create', ensureLoggedIn('/login'), postController.addPost);

 router.post('/create',
  [
    /**Check the form and validated it before submitting  */
    sanitizeBody('title'),
    check('title', 'Enter the title of your Post').not().isEmpty(),
    sanitizeBody('description'),
    check('description', 'Enter the description of your Post').not().isEmpty(),

],
(req: Request, res: Response) => {
   wrapAsync(postController.createPost(req, res));
});

router.get('/posts', ensureLoggedIn('/login'), wrapAsync(postController.posts)) ;

router.get('/create/:id/edit', ensureLoggedIn('/login'), wrapAsync(postController.editPost));
router.post(
    '/create/:id',
    wrapAsync(postController.updatePost),
  );
  router.get(
    '/create/:id/delete',
    wrapAsync(postController.deletePost),
  );

export default router;