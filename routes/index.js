const express = require("express"),
      router  = express.Router(),
      passport = require("passport")
      User    = require("../models/user");

router.get("/",(req,res)=>{
    res.render("signup");
});

router.post("/register",(req,res)=>{
    User.create(req.body.user);  
})

router.post("/login",passport.authenticate('local'{
    failureRedirect:"/login",
    failureFlash:"Invalid email or password"
    }),(req,res)=>{
        res.redirect("/dashboard");
    }
);

router.get("/auth/github",passport.authenticate("github"));

router.get("/auth/github/callback",passport.authenticate("github",{
    failureRedirect:"/login",
    failureFlash:true
    }),(req,res)=>{
        res.redirect("/dashboard");
    }
)

module.exports=router;
