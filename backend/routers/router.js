import Router from "express";
import { loginUser } from "../controller/login.js";
import { signIn } from "../controller/login.js";
import { tokenVerify } from "../controller/token_authorization.js";
import {forgotPassword} from "../controller/fotgotPassword.js"
import { resetpass } from "../controller/resetPassword.js";
import { profileData } from "../controller/profile.js";
import { getProfile } from "../controller/profile.js";
import { getBuddies } from "../controller/matchBuddies.js";
const userRouter=Router()



userRouter.post("/signin",signIn)
userRouter.post("/login",loginUser) 
userRouter.post("/forgot-password",forgotPassword)
userRouter.post("/resetPassword",resetpass)
userRouter.get("/vijay",(req,res)=>{
    console.log("hello vijay"); 
    res.send("hello vijay")
})
userRouter.use(tokenVerify)
userRouter.post("/profile",profileData)
userRouter.get("/getProfile",getProfile)
userRouter.get("/getBuddies",getBuddies)



userRouter.get("/vijay",(req,res)=>{
    res.send("vijay")
    console.log("vijay");
})


export {userRouter} 