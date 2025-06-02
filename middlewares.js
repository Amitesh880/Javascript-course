const express = require("express");

const app = express();
app.use(express.json());
//dumb way
 
// app.get("/health-care", (req,res)=>{
//     const kidneyId = req.query.kidneyId
//     const username = req.headers.username
//     const password = req.headers.password

//     if (username!= "harkirat" || password!= "pass") {
//        res.status(400).json({
//         msg:"sometihng is wrong in the inputs"
//        })
//        return
//     }
//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(400).json({
//         msg:"sometihng is wrong in the inputs"
//        })
//        return
//        }

//         res.json({
//             msg:"Your kidney is fine!"
//         })
      
// })
// app.listen(3000)


function usermiddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    if (username!= "harkirat" || password!= "pass") {
       res.status(403).json({
        msg:"Incorrect inputs"
       })
    }
    else{
        next();
    }
}

function kidneymiddleware(req,res,next){
    const kidneyId = req.query.kidneyId
        if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
        msg:"Incorrect inputs"
       })
       }
       else{
        next();
       }
}

app.get("/health-checkup",usermiddleware,kidneymiddleware ,(req,res)=>{
    res.send("You are healthy")
})
app.get("/kidney-checkup",usermiddleware,kidneymiddleware ,(req,res)=>{
    res.send("Your kidney is healthy")
})
app.get("/heart-checkup",usermiddleware,kidneymiddleware ,(req,res)=>{
    res.send("Your heart is healthy")
})

app.listen(3000)
