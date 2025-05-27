function cutIt(str,startIndex,endIndex){
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(i>=startIndex && i<endIndex){
            newStr=newStr+str[i];
        }
    }
    return newStr;
}
const value="anushk kumar raj";
let ans2=value.slice(2,5);
console.log(ans2);
console.log(cutIt(value,2,5));

const value1="hi my name is anushk";
const words=value .split(" ");
console.log(words);

console.log(parseInt("42huguh"));
console.log(parseInt("jhjhjhj42huguh"));

const initialArray=[1,2,3];
initialArray.push(2);
console.log(initialArray);
initialArray.pop(2);
console.log(initialArray);
initialArray.shift();
console.log(initialArray);
initialArray.unshift(6);
console.log(initialArray);
console.log(parseFloat("4"));

array1=[1,2,3]
array2=[4,5,6]
console.log(array1.concat(array2));

function logThing(str){
    console.log(str);   
}

initialArray.forEach(logThing)


function log1(){
    console.log("hello world 1");
}
function log2(){
    console.log("hello world 2");    
}
function logwhatspresent(fn){
    fn();
}
logwhatspresent(log2);


// const dog={
//     name:"doggie",
//     legcount:2,
//     speaks:"bhow bhow"
// };

// const cat={
//     name:"cat",
//     legcount:2,
//     speaks:"meow",
// };
// function printstr(animal){
//     console.log("animal "+animal["name"]+" "+animal["speaks"]);
// }

// //animal x bhow bhows with 2 legs
// printstr(dog);
// printstr(cat);

class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    static myType(){
        console.log("Animal")
    }
    speak(){
        console.log("hi there "+this.speaks);
    }
}
console.log(Animal.myType())
let dog=new Animal("dog",4,"bhow bhow");
let cat=new Animal("cat",4,"meow");
cat.speak();

const currentDate=new Date();
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDate());
console.log(currentDate.getYear());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.setFullYear(2022));
console.log(currentDate.getTime());


function calculateSum(){
    let a=0;
    for(let i=0;i<1000000000;i++){
        a=a+i;
    }
    return a;
}
const beforeDate=new Date();
const beforetimeinms=beforeDate.getTime();

calculateSum();

const afterDate=new Date();
const aftertimeinms=afterDate.getTime();

console.log(aftertimeinms-beforetimeinms);


const users='{"name":"harkirat",  "age":24, "gender":"male"}'

//JSON.parse
//JSON .stringify

const user=JSON.parse(users);
console.log(user["gender"]);

const user1={
    name:"harkirat",
    gender:"male"
}

const finalString=JSON.stringify(user)
console.log(finalString)


//anonymous function
function sumOfSomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
     return val1+ val2;

}
const ans=sumOfSomething(1,2,function(a){
    return a*a;
})
console.log(ans);
