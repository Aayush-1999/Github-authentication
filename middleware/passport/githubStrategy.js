const githubStrategy = require("passport-github").Strategy,
      User           = require("../../models/user"),
      mongoose       = require("mongoose");

module.exports=passport=>{
    passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: `${process.env.HOST}/auth/facebook/callback`,
        profileFields: ['id', 'displayName', 'picture', 'email','name']
    },
    function(accessToken, refreshToken, profile, cb) {
        process.nextTick(function(){
            User.findOne({ email: profile.emails[0].value },(err, user)=> {
                if(err) {
                  return done(err);
                }
                else{
                    let newUser = new User({
                        id:profile.id,
                        token:accessToken,
                        firstName:profile.name.givenName,
                        lastName:profile.name.familyName,
                        email:profile.emails[0].value,
                    });
                    newUser.save(function(err) {
                        if(err) {
                            return done(err);
                        } 
                        else {
                            done(null, newUser);
                        }
                    });
                }
            });
        });
    }
   ));
};