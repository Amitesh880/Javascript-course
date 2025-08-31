"use strict";
// interface User{
//     name:string,
//     age:number
// }
// function sumofAge(user1:User,user2:User) {
//     return user1.age + user2.age;
// }
// let age =sumofAge({
//     name:"Amitesh",
//     age:18
// },{
//     name:"Anushk",
//     age:18
// });
// console.log(age);
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Amitesh",
    age: 18
};
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
//# sourceMappingURL=index.js.map