import {Request, Response} from "express";
import {validationResult} from "express-validator";
import {Post} from "../models/Post";

export const addPost = (req: Request, res: Response) => {
    res.render("create", {title: "Create Post | Hackathon Starter Kit"});
};
export const posts = async (req: Request, res: Response) => {
    //Find Post by ID
    //@ts-ignore
    const posts = await Post.find({author: req.user.id}).select("title description");
    res.render("posts", {title: "Your Posts | Hackathon Starter Kit", posts});
};
export const editPost = async (req: Request, res: Response) => {
    //Find Post by author ID
    //@ts-ignore
    const post = await Post.findOne({_id: req.params.id}).select("title description");
    res.render("create", {title: "Edit Your Post | Hackathon Starter Kit ", post});
};

export const updatePost = async (req: Request, res: Response) => {
    // Find and update the store
    await Post.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true, // return the new store instead of the old one
        runValidators: true,
    }).exec();
    req.flash("success", "Your Post has been successfully updated!");
    res.redirect("/posts");
    // Redirect them to the store and tell them it worked
};

export const deletePost = async (req: Request, res: Response) => {
    // Find and update the store
    await Post.findOneAndDelete({_id: req.params.id}).exec();
    req.flash("success", "Your Post has been Deleted!");
    res.redirect("/posts");
    // Redirect them to the store and tell them it worked
};

export const createPost = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //@ts-ignore
        req.flash("error", errors.array().map(err => err.msg));
        res.render("create", {
            title: "Create Post",
            body: req.body,
            flashes: req.flash(),
        });
    } else {
        //@ts-ignore
        req.body.author = req.user._id;
        await new Post(req.body).save();
        req.flash("success", "Your Post has been created!");
        res.redirect("/posts");
    }
};
