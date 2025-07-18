const express = require("express");
const {createtodo,updatetodo} = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors());


app.post("/todos", async function (req,res) {
     const createPayload = req.body;
    const parsepayload = createtodo.safeParse(createPayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos",async function (req,res) {
   const todos =await todo.find({});
   res.json({
    todos
   })

})

app.put("/copmleted",async function(req,res){
    const updatepayload = req.body;
    const parsepayload = updatetodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
            _id: req.body.id
        },{
            completed:true
        })
        res.json({
            msg:"todo marked as completed"
        })
})
app.listen(3000)