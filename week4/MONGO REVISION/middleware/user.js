//usermiddleware for auth
const { User } = require("../db/index")

async function usermiddleware(req,res,next){
    //user logic
    const username = req.headers.username;
    const password = req.headers.password;
    
    const user = await User.findOne({
        username:username,
        password:password
    })

    try {
        if(user){
            next()
        }else{
            res.status(403).json({msg:"user does not exist"});
        }
    } catch (error) {
         res.status(500).json({msg:"internal server error"})
    }
}

module.exports = usermiddleware;
