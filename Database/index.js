const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
mongoose.connect(
    "mongodb+srv://amitesh88080:Amitesh8808097955@cluster0.7maxwmq.mongodb.net/",
);

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
});

app.post("/signup",async function (req,res) {
    const username = req.body.username
    const password= req.body.password;
    const name = req.body.name

    const existingUser = await User.findOne({
        email:username
    })
    if(existingUser){
        return res.status(400).send("User already exist")
    }

const user = new User({
    name: name,
    email: username,
    password:password
})
user.save();
res.json({
    msg: "User created successfully"
})
})
app.listen(3000)
