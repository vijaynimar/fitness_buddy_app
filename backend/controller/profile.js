import jwt from "jsonwebtoken"
import { user } from "../models/login_model.js"
import {profile} from "../models/profileSchema.js"
import "dotenv/config"
const jwtKey=process.env.Jwt_password
export const profileData=async(req,res)=>{
    const token=req.headers["authorization"]
    if(!token){
        return res.status(403).send("Token is required" );
    }
    try{
        const decoded=jwt.verify(token,jwtKey)
       const {username,email}=decoded
        const users=await user.findOne({username,email})
         if(!users){
         return res.status(404).send("user not found")
         }
         const profileExists=await profile.findOne({username,email})
         if(profileExists){
            return res.status(201).send("profile already exits")
         }
        const {name,city,preferredWorkout,fitnessGoals}=req.body
        const newProfile=new profile({
            userId:users._id,
            username:users.username,
            email:users.email,
            name:name,
            city:city,
            preferredWorkout:preferredWorkout,
            fitnessGoals:fitnessGoals,
            createdAt:new Date()
        })  
        await newProfile.save()
        res.status(200).send(newProfile)

    }catch(err){
        return res.status(404).send({ error: "Internal server error", details: err.message });

    }
}


  
export const getProfile=async(req,res)=>{
    const token=req.headers["authorization"]
    if(!token){
        return res.status(403).send("token not exists")
    }
    try{
        const decodedToken= jwt.verify(token,jwtKey)
        const {username,email}=decodedToken
        const dataProfile=await profile.findOne({username,email})
        res.status(201).json({dataProfile})

    }catch(err){
        return res.status(404).send("error in get photos",err)
    }

}