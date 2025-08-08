const { Router } = require("express");
const router = Router();
const usermiddleware = require("../middleware/user");
const { route } = require("./admin");
const { User } = require("../db");

//user routes

router.post('/signup',async(req,res)=>{
    //user signup
    const username = req.body.username;
    const password = req.body.password;
    
    const NewUser = await User.findOne({
        username:username,
        password:password
    })
    try {
         if(!NewUser){
        res.status(403).json({msg:"user already exists"})
    }else{
        res.json({
            msg:"user created successfully"
        })
    }
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
    }
   
});

router.get('/courses',(req,res)=>{
    //all courses
});

router.post('/courses/:courseId',usermiddleware,(req,res)=>{
    //course puchase logic
});

router.get('/purchasedCourses',usermiddleware,(req,res)=>{
    //fetch purchased courses
});

module.exports = router;
