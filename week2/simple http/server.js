const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const env = require('dotenv')

env.config();


//middleware
app.use(express.json())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
// res.json({ "msg" :"hello welcome to my server",
//     "Application ID": "Candidate1436" ,
//     "password": "1910"
// })
res.send(process.env.TOKEN);
})

app.post("/",(req,res)=>{
    const message = req.body.message
    console.log(message);
    res.json({ "output" : "if you are reading this message it means you have successfully posted something!"})
})

app.listen(8022,()=>{
    console.log("listening to port 8022")
})