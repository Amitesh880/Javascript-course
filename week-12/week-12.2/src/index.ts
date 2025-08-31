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



// Pick & Partial

// interface User{
//     id:string,
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }

// type updateProps = Pick<User, 'name'|'age'|'email'>
// type updatepartialprops = Partial<updateProps>
// function updateUser(updateprops:updatepartialprops){

// }
// updateUser({
//     name:"Amitesh",
//     age:18
// })


//Readonly
type User={
    name:string,
     age :number
}
const user:Readonly<User> = {
    name:"Amitesh",
    age:18
}
// user.name = "jkhdgkyuf";

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.



