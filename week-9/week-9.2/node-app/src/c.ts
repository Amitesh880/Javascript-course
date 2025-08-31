// const express= require("express")
// const app = express();
// enum ResponseStatus{
//     Success=200,
//     Notfound=404,
//     Error=500
// }

// app.get("/",(req,res)=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus.Notfound).json({})
//     }
//     res.json({})
// })



function identity<T>(arg:T) {
    return arg;
}

let output1 = identity<string>("myString")
let output2 = identity<number>(1123)

output1.toUpperCase();

