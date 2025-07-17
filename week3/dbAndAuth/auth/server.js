const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const allUsers =[{
    username:"tanmaykulkarni@gmail.com",
    password:"1234",
    name:"tanmay kulkarni"
},{
    username:"arnavkulkarni@gmail.com",
    password:"12345",
    name:"arnav kulkarni"
},{
    
    username:"sohamjagtap@gmail.com",
    password:"123",
    name:"soham jagtap"
}]

function userExists (username,password){
    const exists = allUsers.filter((user) =>{
        user.username == username && user.password == password; 
    })
    if (!exists) {
        return false
    }
    return true;


    // let user_exists = false;
    // for( let i=0;i<allUsers.length;i++){
    //     if(allUsers[i].username == username && allUsers[i].password == password){
    //         return  true
    //     }
    // }
    // return user_exists;
}

app.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username,password)) {
        return res.status(403).json({
            msg: "user does not exist"
        })
    }
    var token = jwt.sign({username : username},jwtPassword);
    return res.json({
        token, 
    })
})

app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username
        res.json({
            users: allUsers
        })
    } catch (error) { 
        return res.status(403).json({
            msg:"invalid token!"
        })
    }
})

app.listen(5000,()=>{
console.log("listening to port 5000!")
})