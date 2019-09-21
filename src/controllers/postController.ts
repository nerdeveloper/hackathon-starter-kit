import { Request, Response, NextFunction } from "express";
import { validationResult, } from 'express-validator';
import { Post } from "../models/Post";


export const createPost = (req: Request, res: Response) => {
  res.render('create', { title: 'Create Post' });
  
}
export const posts = async (req: Request, res: Response) => {
    //Find Post by ID
    //@ts-ignore
    const posts = await Post.find({author: req.user.id})
    .select("title description")
    res.render('posts', { title: 'Your Posts', posts });
    console.log(posts);
     }

export const addPost = async(req: Request, res: Response, ) => {

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //@ts-ignore
      req.flash('error', errors.array().map(err => err.msg));
      res.render('create', {
        title: 'Create Post',
        body: req.body,
        flashes: req.flash()
        });
    } else {
        //@ts-ignore
        req.body.author = req.user._id;
        const post  = await new Post(req.body).save();
        req.flash("success", "Your Post has been created!")
        res.redirect('/posts');
       

 }
  } catch (e) {
    
    res.redirect('/');
    throw new Error(e)
  }

};

