import Router from "express";
import { loginUser } from "../controller/login.js";
import { signIn } from "../controller/login.js";
import { tokenVerify } from "../controller/token_authorization.js";
import {forgotPassword} from "../controller/fotgotPassword.js"
import { resetpass } from "../controller/resetPassword.js";
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





userRouter.get("/vijay",(req,res)=>{
    res.send("vijay")
    console.log("vijay");
})


export {userRouter} 