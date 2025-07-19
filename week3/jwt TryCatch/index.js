const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
 
function signJwt(username,password){
    const usernameResponse = usernameSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
 if(!usernameResponse || !passwordResponse){
    return null
 }
    const token = jwt.sign({
        username
    }, jwtPassword);
    return token;
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}

function verifyJwt(token){
    let ans = true;
    try {
        jwt.verify(token , jwtPassword);
    } catch (error) {
        ans = false;
    }
    return ans
}
// jwtVerify is a different function when we just use the logic like decode it throws an error(function malformed)
// if you want to to return true or false you need to put the function into trycatch

// to test put inputs 