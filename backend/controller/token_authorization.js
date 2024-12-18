import jwt from "jsonwebtoken"
import "dotenv/config"
const jwt_key=process.env.Jwt_password
console.log(jwt_key);
export const tokenVerify=async(req,res,next)=>{
    const token=req.headers["authorization"]
    try{
        const verification=await jwt.verify(token,jwt_key)
        console.log("token verified");
        if(!verification){
            return res.status(201).send("token verification error")
        }
        next()
    }catch(err){
        res.status(200).send("error in token")
    }


}