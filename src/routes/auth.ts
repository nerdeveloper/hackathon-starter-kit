import express from 'express';
const router = express.Router();
import passport from 'passport';
//import '../handlers/passport'

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
passport.authenticate('google', {
    failureRedirect: '/login',
    failureFlash: 'Incorrect Email Address or Password!',
    successRedirect: '/',
    successFlash: 'You are now logged in!',
  })

 );


router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
passport.authenticate('github', {
    failureRedirect: '/login',
    failureFlash: 'Incorrect Email Address or Password!',
    successRedirect: '/',
    successFlash: 'You are now logged in!',
  })

 );


export default router;