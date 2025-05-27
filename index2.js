const fs=require('fs');

//my own asynchronous function
function kiratsReadFile(){
    return new Promise(function(resolve){
        console.log("inseide promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);
            

        });
        
    });
}

function onDone(data){
    console.log(data);
}
var a=kiratsReadFile();
console.log(a);

a.then(onDone);