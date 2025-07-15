// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post("/",(req,res)=>{
//     const kidney = req.body.kidney;
//     const response = schema.safeParse(kidney);
//     if(!response.success){
//         res.status(411).json({msg:"invalid input"})
//     }else{
//         res.send({
//             response
//         })
//     }
// })

// app.listen(3000,()=>{ 
//     console.log("listening to port 3000")
// })


// simple login page validator

const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

function inputValidator(obj){
    const schema = zod.object({email: zod.string().email(),
        password: zod.string().min(8)
    })
    return schema.safeParse(obj);
}

app.post("/login",(req,res)=>{
    const response = inputValidator(req.body);
    if(!response.success){
        res.json({
            msg:"your inputs are invalid"
        }) 
            
        } else    {
        res.json({msg:"login successful"})
        }
    }
)

app.listen(2000,()=>{
    console.log("listening to port 2000!")
})
