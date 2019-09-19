import passport from 'passport';
import config from '../config';

import { User } from "../models/User";
import passportLocal from 'passport-local';
import * as passportGoogle from "passport-google-oauth";
import * as passportGithub from 'passport-github';
import * as passportTwitter from 'passport-twitter';
import * as passportFacebook from 'passport-facebook';
import * as passportLinkedin from 'passport-linkedin-oauth2'
//@ts-ignore
import * as passportDropbox from 'passport-dropbox-oauth2';
// Local Authentication strategy
const LocalStrategy = passportLocal.Strategy;



passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, User.authenticate()));

// Google Authentication strategy
const googleStrategy = passportGoogle.OAuth2Strategy;

passport.use(new googleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "/auth/google/callback"
}, ( accessToken, refreshToken, profile, done) => {
  User.findOne({ 'email' : profile._json.email }, (err, user) => {
    if (err)
      return done(err);

    if (user) {
          return done(null, user);
          
    } else {
    
      const user = new User({ googleId: profile.id, email: profile._json.email, token: accessToken });
      user.save((err) => {
        if (err) {
          throw err;
          
        }
        return done(null, user);
      });
    }


})
}));

// Github Authentication strategy
const githubStrategy = passportGithub.Strategy 
passport.use(new githubStrategy({
  clientID: `${process.env.GITHUB_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: "/auth/github/callback"
}, ( accessToken, refreshToken, profile, done) => {
 //@ts-ignore
  User.findOne({ 'email' : profile._json.email }, (err, user) => {
    if (err)
      return done(err);

    if (user) {
          return done(null, user);
          
    } else {
      //@ts-ignore
      const user = new User({ githubId: profile.id, email: profile._json.email, token: accessToken });
      user.save((err) => {
        if (err) {
          throw err;
          
        }
        return done(null, user);
      });
    }


}
)
}));


// Twitter Authentication strategy
const twitterStrategy = passportTwitter.Strategy 
passport.use(new twitterStrategy({
  consumerKey: `${process.env.TWITTER_CONSUMER_KEY}`,
  consumerSecret: `${process.env.TWITTER_CONSUMER_SECRET}`,
  callbackURL: "/auth/twitter/callback",
  includeEmail: true
}, ( accessToken, refreshToken, profile, done) => {

  User.findOne({ 'email' : profile._json.email}, (err, user) => {
    if (err)
      return done(err);

    if (user) {
          return done(null, user);
          
    } else {
   
      const user = new User({ twitterId: profile.id, email: profile._json.email, token: accessToken });
      user.save((err) => {
        if (err) {
          throw err;
          
        }
        return done(null, user);
      });
    }


}
)
}));

// Facebook Authentication strategy
const facebookStrategy = passportFacebook.Strategy
passport.use(new facebookStrategy({
  clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
  clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
  callbackURL: "/auth/facebook/callback",
}, ( accessToken, refreshToken, profile, done) => {

  User.findOne({ 'email' : profile._json.email}, (err, user) => {
    if (err)
      return done(err);

    if (user) {
          return done(null, user);
          
    } else {
   
      const user = new User({ twitterId: profile.id, email: profile._json.email, token: accessToken });
      user.save((err) => {
        if (err) {
          throw err;
          
        }
        return done(null, user);
      });
    }


}
)
}));

// LinkedIn Authentication strategy
const linkedinStrategy = passportLinkedin.Strategy
passport.use(new linkedinStrategy({
  clientID: `${process.env.LINKEDIN_CLIENT_ID}`,
  clientSecret: `${process.env.LINKEDIN_CLIENT_SECRET}`,
  callbackURL: "/auth/linkedin/callback",
  //@ts-ignore
  scope: ['r_emailaddress', 'r_liteprofile'],
  state: true
}, ( accessToken:any, refreshToken:any, profile:any, done:any) => {

  User.findOne({ 'email' : profile.emails[0].value}, (err, user) => {
    if (err)
      return done(err);

    if (user) {
          return done(null, user);
          
    } else {
   
      const user = new User({ linkedinId: profile.id, email: profile.emails[0].value, token: accessToken });
      user.save((err) => {
        if (err) {
          throw err;
          
        }
        return done(null, user);
      });
    }


}
)
}));

// Dropbox Authentication strategy
const dropboxStrategy = passportDropbox.Strategy

passport.use(new dropboxStrategy({
  apiVersion: '2',
  clientID: `${process.env.DROPBOX_CLIENT_ID}`,
  clientSecret: `${process.env.DROPBOX_CLIENT_SECRET}`,
  callbackURL: `${config.siteurl}/auth/dropbox/callback`,
}, ( accessToken:any, refreshToken:any, profile:any, done:any) => {

  User.findOne({ 'email' : profile.emails[0].value}, (err, user) => {
    if (err)
      return done(err);

    if (user) {
          return done(null, user);
          
    } else {
   
      const user = new User({ dropboxId: profile.id, email: profile.emails[0].value, token: accessToken });
      user.save((err) => {
        if (err) {
          throw err;
          
        }
        return done(null, user);
      });
    }


}
)
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});