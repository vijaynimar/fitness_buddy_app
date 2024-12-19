import {Schema,model} from "mongoose"


const profileSchema=new Schema({
    name:{type:String,required:true},
   city:{type:String,required:true},
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user", 
        required: true,
      },
      email:{type:String,required:true},
      username:{type:String,required:true},
    preferredWorkout:{
        type:String,
        required:true,
        enum:["Yoga", "Running", "Weightlifting"]
    },
    fitnessGoals:{type:String,required:true},
    createdAt:{
        type:Date,default:Date.now
    }
})

const profile=model("profile",profileSchema)

export {profile}

