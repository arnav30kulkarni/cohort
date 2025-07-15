// AUTHENTICATION USING MIDDLEWARES

const express = require("express");
const app = express();

// // middlewares are used to authenticate than to just keep repeating same logic over and over again
function userMiddleware(req,res,next){
    
    const password = req.headers.password;
    const username = req.headers.username;

    if(username != "arnav" || password != "password"){
        res.status(403).json({msg:"incorrect inputs please check again :( "})
    }else{
        next()
    }
}
// // middleware 2
function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId !=1 && kidneyId != 2){
        res.status(403).json({msg:"incorrect inputs please check again :("})
    }else{
        next()
    }
    }

// get request
app.get("/healthCheckUp", userMiddleware , kidneyMiddleware, (req,res)=>{
    res.json({msg:"your health is good :)"})
})

app.get("/heartCheckUp", userMiddleware,(req,res)=>{
    res.json({msg:"your heart is perfectly good :)"})
})

//one final middleware is called global catches used to avoid error from getting read here-->
app.use((err, req , res, next) => {
    res.json({
        msg:"sorry there is a problem in the server"
    })
})

app.listen(3000,()=>{
    console.log("listening at port 3000.")
})
    
