const mongoose = require("mongoose");
const { boolean } = require("zod/v4");

mongoose.connect("mongodb+srv://amitesh88080:Amitesh8808097955@cluster0.7maxwmq.mongodb.net/todos")
const todoschema = mongoose.Schema({
    title:String,
    description:String,
    completed:boolean
})

const todo = mongoose.model('todos',todoschema);

module.exports={
    todo
}