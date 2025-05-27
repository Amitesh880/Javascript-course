// var d=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("foo");

//     },1000);
// });
// function callback(){
//     console.log(d);
// }
// console.log(d);
// d.then(callback)

function promisifiedMyOwnSetTimeout(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
}
const ans=promisifiedMyOwnSetTimeout(1000);
console.log(ans);
ans.then(function(){
    console.log("timeout is done"); 
});