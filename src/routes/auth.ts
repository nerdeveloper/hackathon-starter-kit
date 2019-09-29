import express from "express";
const router = express.Router();
import passport from "passport";

// Google Auth
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

router.get("/github", passport.authenticate("github"));

router.get(
    "/github/callback",
    passport.authenticate("github", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

router.get("/twitter", passport.authenticate("twitter"));

router.get(
    "/twitter/callback",
    passport.authenticate("twitter", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

router.get("/facebook", passport.authenticate("facebook", {scope: ["email"]}));

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

router.get("/linkedin", passport.authenticate("linkedin"));

router.get(
    "/linkedin/callback",
    passport.authenticate("linkedin", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

router.get("/dropbox", passport.authenticate("dropbox-oauth2"));

router.get(
    "/dropbox/callback",
    passport.authenticate("dropbox-oauth2", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

router.get("/discord", passport.authenticate("discord"));

router.get(
    "/discord/callback",
    passport.authenticate("discord", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

router.get("/slack", passport.authenticate("slack"));

router.get(
    "/slack/callback",
    passport.authenticate("slack", {
        failureRedirect: "/login",
        successReturnToOrRedirect: "/posts",
        successFlash: "You are now logged in!",
    }),
);

export default router;
