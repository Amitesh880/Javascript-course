// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data:{
//         email:username,
//         password,
//         firstName,
//         lastName
//     },
//     select:{
//       id:true,
//       password:true,
//       firstName:true
//     },
//   })
//   console.log(res);
// }

// insertUser("Amitesh2@gmail.com","password","Amitesh","Singh")







import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
 const res = await prisma.user.update({
    where:{email:username},
    data:{
        firstName,
        lastName
    }
  })
  console.log(res)
}

updateUser('Amitesh@gmail.com',{
  firstName:"Amitesh kumar",
  lastName:"Maurya"
}).then(()=>{
  console.log('user updated')
})