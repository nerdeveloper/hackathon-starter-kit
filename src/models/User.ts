import  mongoose from 'mongoose'; 
import  validator from 'validator';
import  md5 from "md5";
import passportLocalMongoose from "passport-local-mongoose";


/** @ts-ignore - This allow the the typescript compiler to ignore untyped JS modules/libraries */

//@ts-ignore 
import mongoosedbErrorHandler from 'mongoose-mongodb-errors';


export type UserDocument = mongoose.Document & {
    email: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    gravatar: String,
    posts:any,
    token:any,
    googleId:String,
}


 const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: 'Please enter your email address',
        trim: true,
        validate: [validator.isEmail, 'Invalid Email address'],


    },
    googleId: String,
    githubId: String,
    twitterId: String,
    token: String,

    resetPasswordToken: String,
    resetPasswordExpires: Date,
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
},
);
userSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id', 
    foreignField: 'author'
});

userSchema.virtual('gravatar').get(function(){
    const hash = md5(this.email);
  return `https://gravatar.com/avatar/${hash}?s=200`;
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email',   errorMessages: {
    UserExistsError: 'A user with the given email is already registered'
}});

userSchema.plugin(mongoosedbErrorHandler);

export const User = mongoose.model("User", userSchema as mongoose.PassportLocalSchema);