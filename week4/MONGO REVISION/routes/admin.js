const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const router = Router();

//admin routes
router.post('/signup',async(req,res)=>{
    //admin signup logic
    const username = req.body.username;
    const password = req.body.username;
 try {
     const newAdmin = await Admin.create({
        username:username,
        password:password
    })
if(newAdmin){
res.json({
    msg:"Admin created successfully"
})}else{
    res.status(403).json({msg:"user already exists"})
}
 } catch (error) {
    res.status(500).json({msg:"internal server error"})
 }
})

router.post('/courses',adminMiddleware,async (req,res)=>{
    //admin course creation logic
    const title = req.body.title;
    const description= req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    console.log(newCourse);
    res.json({
        msg:"course created successfully", courseId: newCourse._id
    })
})

router.get("/courses",adminMiddleware,async(req,res)=>{
    //fetching all course logic
    const response = await Course.find({});
    res.json({
        courses:response
    });
})

module.exports = router;