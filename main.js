console.log("hello world")
// console.log(a);
let a=1;
a=2;
console.log(a);

let firstname="Anushk";
let age=18
let ismarried=false;

console.log("this person name is " + firstname + " and their age is "+ age);
console.log("this persons name is");
console.log(firstname);

const users1={
    firstName: "harkirat",
    gender:"male"
}
console.log(users1["firstName"]);
const allusers=[{
    firstName:"harkirat",
    gender:"male"
},{
    firstName:"raman",
    gender:"male",
    metadata:{
        age:21,
        address:""
    }
},{
    firstName:"priya",
    gender:"female" 
}]

for(let i=0;i<allusers.length;i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["firstName"]);
        
    }
}

function sum(num1,num2,fnToCall){
    let result=num1+num2;
    fnToCall(result);
}
    function displayResult(data){
        console.log("Result of the sum is: "+data);
        
    }
    function displayResultPassive(data){
        console.log("Sum's result is: " +data);
        
    }
 const ans=sum(1,2,displayResult);

function greet(){
    console.log("Hello world");
    
}
setTimeout(greet,3*1000);
setInterval(greet,1*1000);