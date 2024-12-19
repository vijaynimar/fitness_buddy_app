import {Schema,model} from "mongoose"


const createUser=new Schema({
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const user=model("user",createUser)
export {user} 