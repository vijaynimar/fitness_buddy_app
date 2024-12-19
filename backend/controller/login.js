import { user } from "../models/login_model.js";
import jwt from "jsonwebtoken"
import argon2 from "argon2"
import "dotenv/config"
const tok=process.env.Jwt_password
export const loginUser=async(req,res)=>{
    const {email,password}=req.body
    const userExists=await user.findOne({email})
    if(!userExists){
        return res.send("user not exist")
    }
    const hashPassword=await argon2.verify(userExists.password,password)
    if(hashPassword){
        const token=jwt.sign({ 
            username:userExists.username
        },tok,
        {
            expiresIn:"7 days"
        }) 
        
    res.json({token})
    }
}



export const signIn=async(req,res)=>{
    const {email,username,password}=req.body
    // console.log(email);
    try{
    const userExists=await user.findOne({email})
    if(userExists){
      return  res.status(201).send("user already exists")
    }

    const hash=await argon2.hash(password)

    const newUser=new user({
        email:email,
        username:username,
        password:hash
    })
    await newUser.save()
    res.json({newUser})
    }catch(err){
        console.log(err);
        res.send("error in sign-in")
    }
}