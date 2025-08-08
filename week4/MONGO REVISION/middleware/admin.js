const {Admin} = require("../db/index")

//middleware for handling auth
 async function adminMiddleware(req,res,next){
    //admin logic
    const username = req.headers.username;
    const password = req.headers.password;
    
    const Admin = Admin.findOne({
        username:username,
        password:password,
    })

    try {
        if(Admin){
            next()
        }
        else{
            res.status(403).json({msg:"admin does not exist"});
        }
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
    }
     
}

module.exports = adminMiddleware;
