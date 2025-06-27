const express =require('express');

const app = express();

//function that returns a boolean if age of the person is more than 14;
function isoldenough(age) {
    if (age>=14) {
        return true;
    }
    else{
        return false;
    }
}
//middleware
function isoldenoughmiddleware(req, res, next) {
    const age= req.query.age;
     if (age>=14) {
        next();
    }
    else{
        res.status(411).json({
        msg:"Sorry you are not of age"
    })
    }
}
// app.use(isoldenoughmiddleware);  
// app.use is used to assing middleware to all funtions below it.
//middleware use
app.get("/ride1",isoldenoughmiddleware,(req,res)=>{
   res.json({
        msg: "You have successfully riden a ride1"
    })
})

//function use
app.get("/ride2", (req,res)=>{
   if(isoldenough(req.query.age)) {
        res.json({
        msg: "You have successfully riden a ride2"
    })
}else{
    res.status(411).json({
        msg:"Sorry you are not of age"
    })
}
})
app.listen(3000);