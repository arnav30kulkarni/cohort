const express = require("express");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456"; 

dotenv.config()

const app = express();

app.use(express.json());

const conn = mongoose.connect("process.env.MONGO_URI")
if (!conn) {
    console.log("!!!!");
    return; 
}
const user = mongoose.model('users',{ name:String , email:String , password:String});

app.post("/signup", async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userExists = await user.findOne({
        email: email
    });
    if (userExists){
        return res.status(400).json({
            msg:"user already exists chose another email!"
        })
        
    }
     const newUser = new user({
            name:name,email:email ,password:password
        })
        newUser.save();
        res.json({
            msg:"user created succesfully"
        })
        
})

app.listen(4000,()=>{
    console.log("listening at port 4000")
})