const jwt = require("jsonwebtoken");

module.exports={
    newToken=user=>{
        return jwt.sign({id:user.id},process.env.JWTSECRET,{expiresIn:'1h'})
    },

    verifyToken=token=>{
        new Promise((resolve,reject)=>{
            jwt.verify(token,process.env.JWTSECRET,(err,payload)=>{
                if(err) return reject(err);
                resolve(payload);
            })
        })
    },

    protect=async(req,res,next)=>{
        let token=req.headers.authorization.split('Bearer ')[1];
        if(!token) return res.redirect('back');
        try{
            const payload=await verifyToken(token);
            const user= await user.findById(payload.id).
                select("-password").exec();
            req.user=user.toJSON();
            next();
        }
        catch(err){
            console.log(err);
        }
    }
}