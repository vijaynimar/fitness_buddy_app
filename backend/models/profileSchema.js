import {Schema,model} from "mongoose"


const profileSchema=new Schema({
    name:{type:String,required:true},
    location:{
        type:{
            latitude:{
                type:Number,
                required:true
            },
            longitude:{
                type:Number,
                required:true
            }
        },
        required:true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user", 
        required: true,
      },
    preferredWorkout:{
        type:String,
        required:true,
        enum:["Yoga", "Running", "Weightlifting"]
    },
    fitnessGoals:{type:String,required:true},
    profilePicture:{type:String},
    createdAt:{
        type:Date,default:Date.now
    }
})