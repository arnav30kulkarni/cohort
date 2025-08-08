const express = require("express");
const app = express();
const cors = require("cors")
const PORT = 3000;
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");


//middleware
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
})); 

app.post("/todo",async(req,res)=>{
   const createPayload = req.body
   const parsedPayload = createTodo.safeParse(createPayload)
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"wrong inputs!"
    })
    return
   }
   await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
   })
   res.json({
    msg:"todo created!"
   })
   
})
app.get("/todo",async (req,res)=>{ 
   const todos = await todo.find({})
   res.json(todos)
})


app.put("/completed",async(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({msg:"todo updated"})
})

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}!`)
})      