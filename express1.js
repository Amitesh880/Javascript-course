const express = require("express")
const app = express();

const users = [{
    name:"harkirat",
    kidneys:[{
    healthy:false
}]
}];
app.use(express.json());

app.get("/", function(req,res){
    const johnkidneys = users[0].kidneys;
   const numberofkindneys =johnkidneys.length;
   let numberofhealthykidneys =0;
   for (let i = 0; i < johnkidneys.length; i++) {
    if (johnkidneys[i].healthy) {
        numberofhealthykidneys = numberofhealthykidneys+1;
    }
   }
   const numberofunhealthykidneys = numberofkindneys-numberofhealthykidneys;
   res.json({
    numberofkindneys,numberofhealthykidneys,
    numberofunhealthykidneys
   })
})

app.post("/", function(req,res){
     const Ishealthy = req.body.Ishealthy;
     users[0].kidneys.push({
        healthy: Ishealthy
     })
     res.json({
        msg: "Done"
     })
}) 

app.put("/",function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy=true;   
    }
    res.json({});
})

function Isthereatleastoneunhealthykidneys(){
    let atleastoneunhelthykidneys = false
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (!users[0].kidneys[i].healthy) {
        atleastoneunhelthykidneys=true
      }
    }
    return atleastoneunhelthykidneys;
}

app.delete("/",function(req,res){ 
    // only if atleast one unhealthy kidney is there then do this else return 411 
    if(Isthereatleastoneunhealthykidneys()){
        const newkidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newkidneys.push({
            healthy:true 
        })
      }
    }
    users[0].kidneys = newkidneys;
    res.json({msg: "done"});
    }
    else{
        res.status(411).json({
            msg: "You have no unhealthy kidneys"
        });
    }
})

app.listen(3000)