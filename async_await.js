function kiratsAsyncFunction(){
    let p=new Promise(function(resolve){
        //do something async logic here
        setTimeout(function(){
            resolve("hi there!")
        },3000)
    });
    return p;
}

async function main(){
    let value=await kiratsAsyncFunction();
    // kiratsAsyncFunction().then(function(value){
        console.log(value);
          console.log("hi there1");
        
    // })
}
main();
console.log("after main");
