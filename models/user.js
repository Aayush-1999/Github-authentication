const mongoose = require("mongoose"),
      bcrypt   = require("bcrypt");

const userSchema= new mongoose.Schema({
    id:String,
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    token:String
})

userSchema.pre("save",async(next)=>{
    const user=this;
    if(user.isModified(password)){
        user.password = await bcrypt.hash(user.password,10)        
    }
    next();
})

module.exports=mongoose.model("User",userSchema);