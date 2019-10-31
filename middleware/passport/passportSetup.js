const  localStrategy = require("./localStrategy"),
       githubStrategy = require("./githubStrategy"),
       passport     = require("passport"),
       User         = require("../../models/user"),
       expressSession = require("express-session"),
       mongoose = require("mongoose");

       
module.exports=app=>{
    app.use(expressSession({
        secret: "youKnowNothing",
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    localStrategy(passport);

    githubStrategy(passport);

    passport.serializeUser((user, done)=> {
        done(null, user._id);
    });

    passport.deserializeUser((id, done)=> {
        User.findById(id, (err, user)=>{
        done(err, user);   
        });
    });
}