import { ootp } from "../models/otp_model.js"
import { user } from "../models/login_model.js"
import argon2 from "argon2"
export const resetpass=async(req,res)=>{
    const {email,otp,newPassword}=req.body
    
    const hash=await argon2.hash(newPassword)
    console.log(otp,newPassword);
    try{
        const emailExist = await ootp.findOne({email:email})
    if(!emailExist){ 
        return res.status(400).send("user not exist")
    }
    if(emailExist.otp==otp){
       await user.updateOne({email},{$set:{password:hash}})
       await ootp.deleteOne({email})
       res.status(200).json({hash,
        message:"password reset successfully"
       })
    }
   
    }catch(err){
        console.log("error in reset Password",err);
        res.status(201).send("error in reset Password",err)
    }

}