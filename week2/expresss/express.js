// const express = require("express");

// function calculateSum(n){
//     ans=0
//     for(let i=0;i<=n;i++){
//         ans+=i
//     }
//     return ans;
// }

// const app = express();

// app.use(express.json());

// app.get("/",(req,res)=>{
//     let n = req.query.n
//     const ans = calculateSum(n);
//     res.send(ans.toString());
// })

// app.listen(2000,()=>{
//     console.log("listening to port 2000!",)
// })

// GET:- to get something from server
// POST:- to post something on server
// PUT:- to update 
// DELETE:- TO DELETE

// STATUS CODES:-
// 404:- not found ,403:- Authentication issue, 200:- server working fine, 500:- server side error, 411:- wrong inputs.

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json())

var users =[{
    name: 'johwn',
    kidney: [{
        healthy:false
    }]
}]

app.get("/",(req,res)=>{
    const johwnKidneys = users[0].kidney;
    const numberOfKidneys = johwnKidneys.length;
    let numberOfHealthyKidneys = 0
    for(i=0;i<johwnKidneys.length;i++){
        if(johwnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    res.json({numberOfKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys});
})

app.post("/",(req,res)=>{
    const isHealthy= req.body.isHealthy
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({msg:"done!"})
})

app.put("/",(req,res)=>{
    if (criteria()){ 
        users[0].kidney[i].healthy=true;
    }else{
        res.Status(411).json({
            msg:"can't replace "
        })
    }
})

app.delete("/",(req,res)=>{
    if(criteria()){
    const newKidney=[]
        if(users[0].kidney[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
        res.json({msg:"successfully deleted!"})
    }else{
        res.status(411).json({msg:"can't delete"})
    }
}
)

function criteria(){
    let a1kidney = false;
    for(i=0;i<users[0].kidney.length;i++){
        if(!users[0].kidney[i].healthy){
            a1kidney = true;
        }
    }
    return a1kidney
}



app.listen(3000,()=>{
    console.log("listening to port 3000!")
})

