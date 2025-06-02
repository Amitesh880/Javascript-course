//map
// given an array, give me back a new array in  
// which every value is multiplied by 2
const input = [1,2,3,4,5];
// const newArray = [];
// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i]*2);
    
// }
// console.log(newArray);

const ans = input.map((i)=>{
    return i*3;
})
console.log(ans);



//filter
//what if i tell you ,given an input array,give me
//back all the even values from it
const array = [1,2,3,4,5]

// const newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if(array[i]%2==0){ newArray.push(array[i])}
// }

// console.log(newArray)

const ans1 =array.filter((i)=>{
   return i%2==0
})
console.log(ans1)