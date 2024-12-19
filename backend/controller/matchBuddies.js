import { profile } from "../models/profileSchema.js";


export const getBuddies=async(req,res)=>{
    const {city,preferredWorkout}=req.body
    if(!city || !preferredWorkout){
        return res.status(403).send("city or preferredWorkout not defined")
    }
    try{
    const nearbyUser=await profile.find({city,preferredWorkout})
    if(!nearbyUser){
        return res.send(200).send("no user found")
    }
    return res.status(200).json({nearbyUser})
    }catch(err){
        return res.status(404).send("error in get Buddies",err)
    }


}