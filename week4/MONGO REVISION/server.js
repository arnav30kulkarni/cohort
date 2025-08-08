//database cannot give you granual access(specific access)
//however some database(firebase) which gets rid of http protocol and gets you granualed access

//mongoose 1st step:- DEFINE SCHEMA
// mongoose needs schema for autocompletion purposes 

// 3 JARGONS in database:
//1. cluster
//2. database
//3. tables

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

app.use(bodyParser.json());
app.use("/admin",adminRouter);
app.use("/user",userRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})