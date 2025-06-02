const zod = require("zod")
const { email } = require("zod/v4")

function validateInputs(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj)
    console.log(response)
}

validateInputs({
    email: "hjdsgdfyugdfh@gmail.com",
    password: "fhfduhdfu"
})