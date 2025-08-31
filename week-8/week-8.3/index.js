const { response } = require("express");
const axios = require("axios")

// function main() {
//     fetch("https://dummyjson.com/todos")
// .then(async (response)=>{
//     const json = await response.json();
//     console.log(json.todos.length);
// });
// }

// async function main() {
//     const response= await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST"})
//     const json = await response.json();
//     console.log(json);
// }

// async function main() {
//     const response= await axios.get("https://dummyjson.com/todos")
//     console.log(response.data.todos.length);
// }

async function main() {
    const response= await axios.post("https://httpdump.app/dumps/54bded49-8f8e-449e-85b9-d9e0b10badc2",{
        username:"Amitesh",
        password:"12t763"
    },{
        headers:{
            Authorization:"Bearer 123"
        }
    })
    console.log(response.data);
}
main();