const jwt = require("jsonwebtoken");

//generate , decode , verify

const value = {
    name: "Amitesh",
    accountnumber: 123123
}

//jwt
const token = jwt.sign(value, "secret");
console.log(token);


//this token has been generated using the secret 
// and hence this token can be verified using this secret

const token1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW1pdGVzaCIsImFjY291bnRudW1iZXIiOjEyMzEyMywiaWF0IjoxNzUxMDU2NDAwfQ.QWX1dTlQe6tZQx22gS6x5ZoZoIPbfnTAmsROk6hY-Eo","secret");
console.log(token1);