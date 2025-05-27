const express=require("express");
const bodyparser=require("body-parser");
const port=3000
const app=express();

app.use(bodyparser.json());

// app.get("/route-handler",function(req,res){
//     res.json({
//         name:"harkirat",
//         age:21
//     })
// })

// app.get('/',function(req,res){
    // res.send('<b>Hello World!<b>')
// })
app.post('/conversations',(req,res)=>{
    console.log(req.body);
    
    console.log(req.headers)
    // res.send('<b>hi there<b>')
    res.send({
        msg:"2+2=4"
    })
})
app.listen(port,function(){
    console.log(`Example app listening on port ${port}`);   
})

    












